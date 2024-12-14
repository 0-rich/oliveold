package com.youngrich.oliveold.history.controller;

import com.youngrich.oliveold.history.service.UserLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/history/like")
public class UserLikeContoller {

    private final UserLikeService userLikeService;

    // 1. 좋아요 등록
    @PostMapping("/{itemSeq}")
    public ResponseEntity<?> setLike(Authentication authentication, @PathVariable("itemSeq") Long itemSeq){
        try{
            userLikeService.setLike(authentication, itemSeq);
            return ResponseEntity.ok("좋아요가 성공적으로 등록되었습니다.");
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 2. 좋아요 취소
    

    // 3. 좋아요 한 상품 전체 조회


}
