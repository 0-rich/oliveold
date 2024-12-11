package com.youngrich.oliveold.cart.controller;

import com.youngrich.oliveold.cart.dto.CartItemInfo;
import com.youngrich.oliveold.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;

    // 1. 장바구니 상품 담기
    @PostMapping()
    public ResponseEntity<?> setItemCart(Authentication authentication, CartItemInfo cartItemInfo){
        try{
            cartService.setItemCart(authentication, cartItemInfo);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 2. 장바구니 상품 삭제

}
