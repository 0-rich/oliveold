package com.youngrich.oliveold.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.youngrich.oliveold.domain.LoginType;
import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.user.Response.AuthTokens;
import com.youngrich.oliveold.user.Response.LoginResponseDto;
import com.youngrich.oliveold.utils.AuthTokensGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;


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

        User kakaoUser = userRepository.findById(userId).orElse(null);

        // 이전 가입 정보가 없으면 회원가입
        if(kakaoUser == null) {
            kakaoUser = User.builder()
                    .userId(userId)
//                    .nickname(nickname)
//                    .email(kakaoEmail)
                    .loginType(LoginType.KAKAO)
                    .build();
            userRepository.save(kakaoUser);
        }

        // 토큰 생성
        AuthTokens token = authTokensGenerator.generate(userId.toString());

        return new LoginResponseDto(userId, token);
    }

}
