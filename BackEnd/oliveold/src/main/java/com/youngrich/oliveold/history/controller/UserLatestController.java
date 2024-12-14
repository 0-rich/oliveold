package com.youngrich.oliveold.history.controller;

import com.youngrich.oliveold.history.service.UserLatestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/history/latest")
public class UserLatestController {

    private final UserLatestService userLatestService;

    // 1. 최근 본 상품 등록
    @PostMapping("/{itemSeq}")
    public ResponseEntity<?> setLatest(Authentication authentication, @PathVariable("itemSeq") Long itemSeq){
        try{
            userLatestService.setLatest(authentication, itemSeq);
            return ResponseEntity.ok("최근 본 상품에 성공적으로 등록되었습니다.");
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 2. 최근 본 상품 전체 조회

}
