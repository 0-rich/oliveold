package com.youngrich.oliveold.user;

import com.youngrich.oliveold.user.Response.LoginResponseDto;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final KakaoService kakaoService;

    // 프론트에서 받은 인가코드 백엔드로 전달 -> 카카오에 토큰 요청
    @GetMapping("/kakao/login")
    public ResponseEntity<LoginResponseDto> kakaoLogin(@RequestParam String code){
        try{
            LoginResponseDto responseDto = (LoginResponseDto) kakaoService.kakaoLogin(code);
            return ResponseEntity.ok(responseDto);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Not Found");
        }
    }
}