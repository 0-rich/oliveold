package com.youngrich.oliveold.user.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.youngrich.oliveold.domain.LoginType;
import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.user.dto.Response.AuthTokens;
import com.youngrich.oliveold.user.dto.Response.LoginResponseDto;
import com.youngrich.oliveold.user.repository.UserRepository;
import com.youngrich.oliveold.utils.AuthTokensGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Random;


@Service
@RequiredArgsConstructor
public class KakaoService {

    private final UserRepository userRepository;
    private final AuthTokensGenerator authTokensGenerator;
    @Value("${kakao.client-id}")
    private String clientId;
    @Value("${kakao.redirect-uri}")
    private String redirectUri;

    public Object kakaoLogin(String code) {

        // 0. 이미 로그인 처리된 유저인지 확인

        // 1. redirect URI 선택
//        String redirectUri = selectRedirectUri(currentDomain)

        // 1. 인가코드로 엑세스 토큰 요청
        String accessToken = getAccessToken(code);

        // 2. 토큰으로 카카오 API 호출
        HashMap<String, Object> userInfo = getKakaoUserInfo(accessToken);

        // 3. 카카오ID로 회원가입 & 로그인 처리
        LoginResponseDto loginResponseDto = kakaoUserLogin(userInfo);

        return loginResponseDto;

    }

    // 1-1. 인가코드로 엑세스 토큰 요청 메서드
    private String getAccessToken(String code) {

        // HTTP Header 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HTTP Body 생성
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("client_id", clientId);
        body.add("redirect_uri", redirectUri);
        body.add("code", code);

        // kakao에 HTTP 요청 보내기
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(body, headers);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        // kakao의 HTTP 응답 (JSON) -> 엑세스 토큰 파싱
        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = null;
        try {
            jsonNode = objectMapper.readTree(responseBody);
        }catch (JsonProcessingException e){
            e.printStackTrace();
        }
        // 토큰 전송
        return jsonNode.get("access_token").asText();
    }

    // 2-1. 토큰으로 카카오 API (유저 정보) 호출 메서드
    private HashMap<String,Object> getKakaoUserInfo(String accessToken) {
        HashMap<String, Object> userInfo = new HashMap<>();

        // HTTP Header 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기
        HttpEntity<MultiValueMap<String, String>> kakaoUserInfoRequest = new HttpEntity<>(headers);
        RestTemplate rt = new RestTemplate();

        ResponseEntity<String> response = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoUserInfoRequest,
                String.class
        );

        // response의 body 정보만 꺼냄
        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();

        JsonNode jsonNode = null;
        try {
            jsonNode = objectMapper.readTree(responseBody);
        }catch (JsonProcessingException e){
            e.printStackTrace();
        }

        Long id = jsonNode.get("id").asLong();
//        String email = jsonNode.get("kakao_account").get("email").asText();
//        String nickname = jsonNode.get("properties").get("nickname").asText();

        userInfo.put("id", id);
//        userInfo.put("email", email);
//        userInfo.put("nickname", nickname);

        return userInfo;
    }

    // 3-1. 카카오ID로 회원가입 & 로그인 처리 메서드
    private LoginResponseDto kakaoUserLogin(HashMap<String, Object> userInfo){
        Long userId = Long.valueOf(userInfo.get("id").toString());
//        String kakaoEmail = userInfo.get("email").toString();
//        String nickname = userInfo.get("nickname").toString();

        User kakaoUser = userRepository.findByUserId(userId).orElse(null);

        // 이전 가입 정보가 없으면 회원가입
        if(kakaoUser == null) {
            kakaoUser = User.builder()
                    .userId(userId)
                    .nickname(generateRandomNickname())
//                    .email(kakaoEmail)
                    .loginType(LoginType.KAKAO)
                    .build();
            userRepository.save(kakaoUser);
        }

        // 토큰 생성
        AuthTokens token = authTokensGenerator.generate(kakaoUser.getUserSeq().toString());

        // 리프레시 토큰 저장
        kakaoUser.setRefreshToken(token.getRefreshToken());
        userRepository.save(kakaoUser);

        return new LoginResponseDto(kakaoUser.getUserSeq(), token);
    }

    // 3-2. 회원가입 랜덤 닉네임 설정
    private final String[] adjectives = {"행복한", "재미있는", "똑똑한", "용감한", "지혜로운", "예쁜", "화난", "귀여운", "배고픈", "철학적인", "슬픈", "푸른", "밝은", "아름다운", "신나는", "똑똑한", "시원한", "강한", "이로운", "무명의", "힘내는", "능동한", "영리한", "거친", "신뢰가는", "건물주", "프로", "네모난", "세모난", "동그란", "각진", "반듯한", "날씬한", "순박한", "열정있는", "열심인", "완벽한", "위대한", "엄한", "근엄한", "진지한", "반짝거리는", "모자쓴", "기다란", "계획적인", "매운", "순둥한", "자신있는", "날쌘", "참지않는", "매력적인", "발전한"};
    private final String[] animals = {"강아지", "고양이", "사자", "코끼리", "펭귄", "호랑이", "팬더", "기린", "물고기", "붉은 여우", "여우", "늑대", "양", "뱀", "토끼", "원숭이", "곰", "북극곰", "기러기", "다람쥐", "거북", "해마", "카멜레온", "물범", "불꽃범", "물개", "파이어 폭스", "장미버섯", "바다마코티", "개미", "개미핥기", "장수말벌", "여왕벌", "토종벌", "푸들", "치와와", "말티즈", "비숑", "산토끼", "딱다구리", "부엉이", "청설모", "유니콘", "전기뱀장어", "풍뎅이", "비단뱀"};

    public String generateRandomNickname(){
        Random random = new Random();
        String adjective = adjectives[random.nextInt(adjectives.length)];
        String animal = animals[random.nextInt(animals.length)];

        return adjective + " " + animal;
    }

}
