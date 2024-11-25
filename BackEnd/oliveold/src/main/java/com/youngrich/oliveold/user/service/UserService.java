package com.youngrich.oliveold.user.service;

import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.user.dto.Request.UserInfoDto;
import com.youngrich.oliveold.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    // 2. 프로필 조회
    @Transactional(readOnly = true)
    public UserInfoDto getUserInfo(Authentication authentication) {
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElse(null);
        if(user != null){
            return UserInfoDto.builder()
                    .name(user.getName())
                    .profileImg(user.getProfileImg())
                    .nickname(user.getNickname())
                    .userId(user.getUserId())
                    .build();
        }else {
            throw new IllegalArgumentException("프로필 조회에 실패했습니다");
        }
    }

    // 3. 프로필 수정
    public void updateUserInfo(UserInfoDto userInfoDto, Authentication authentication) {
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElse(null);
        if(user != null){
            // 수정된 필드만 업데이트
            if(userInfoDto.getNickname() != null) user.setNickname(userInfoDto.getNickname());
            if(userInfoDto.getProfileImg() != null) user.setProfileImg(userInfoDto.getProfileImg());
            if(userInfoDto.getName() != null) user.setName(userInfoDto.getName());
        }else {
            throw new IllegalArgumentException("회원 정보가 없습니다.");
        }
    }

    // 4. 회원탈퇴
    public void deleteUserInfo(Authentication authentication) {
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElse(null);
        if(user != null){
            // 탈퇴 여부 및 만료 일시만 변경
            user.setState(true);
            user.setExpiredAt(LocalDateTime.now());
        }else {
            throw new IllegalArgumentException("회원 정보가 없습니다.");
        }
    }

}
