package com.youngrich.oliveold.user.controller;

import com.youngrich.oliveold.user.dto.Request.PaymentInfoDto;
import com.youngrich.oliveold.user.service.PayService;
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
public class PayController {

    private final PayService payService;

    // 5. 결제 비밀번호 생성
    @PostMapping("/payment")
    public ResponseEntity<?> createPinPw(@RequestBody PaymentInfoDto paymentInfoDto, Authentication authentication){
        try{
            payService.createPinPw(paymentInfoDto, authentication);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


    // 6. 결제 비밀번호 수정
    @PutMapping("/payment")
    public ResponseEntity<?> updatePinPw(@RequestBody PaymentInfoDto paymentInfoDto, Authentication authentication){
        try {
            payService.createPinPw(paymentInfoDto, authentication);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
