package com.youngrich.oliveold.user.controller;

import com.youngrich.oliveold.user.dto.Response.LoginResponseDto;
import com.youngrich.oliveold.user.dto.Request.UserInfoDto;
import com.youngrich.oliveold.user.service.KakaoService;
import com.youngrich.oliveold.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final KakaoService kakaoService;
    private final UserService userService;

    // 1. 프론트에서 받은 인가코드 백엔드로 전달 -> 카카오에 토큰 요청
    @GetMapping("/kakao/login")
    public ResponseEntity<LoginResponseDto> kakaoLogin(@RequestParam String code){
        try{
            LoginResponseDto responseDto = (LoginResponseDto) kakaoService.kakaoLogin(code);
            return ResponseEntity.ok(responseDto);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 2. 프로필 조회
    @GetMapping("/profile")
    public ResponseEntity<UserInfoDto> getUserInfo(Authentication authentication){
        try{
            return ResponseEntity.ok(userService.getUserInfo(authentication));
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 3. 프로필 수정
    @PatchMapping("/profile")
    public ResponseEntity<?> updateUserInfo(@RequestBody UserInfoDto userInfoDto, Authentication authentication){
        try {
            userService.updateUserInfo(userInfoDto, authentication);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 4. 회원 탈퇴
    @DeleteMapping()
    public ResponseEntity<?> deleteUserInfo(Authentication authentication){
        try {
            userService.deleteUserInfo(authentication);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}