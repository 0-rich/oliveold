package com.youngrich.oliveold.cart.controller;

import com.youngrich.oliveold.cart.dto.CartItemDeatilInfo;
import com.youngrich.oliveold.cart.dto.CartItemInfo;
import com.youngrich.oliveold.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;

    // 1. 장바구니 상품 담기
    @PostMapping()
    public ResponseEntity<?> setItemCart(Authentication authentication, @RequestBody CartItemInfo cartItemInfo){
        try{
            cartService.setItemCart(authentication, cartItemInfo);
            return ResponseEntity.ok("상바구니에 상품이 성공적으로 담겼습니다.");
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 2. 장바구니 상품 삭제
    @DeleteMapping("/{cartItemSeq}")
    public ResponseEntity<?> deleteItemCart(Authentication authentication, @PathVariable("cartItemSeq") Long cartItemSeq){
        try{
            cartService.deleteItemCart(authentication, cartItemSeq);
            return ResponseEntity.ok("장바구니 상품 삭제가 성공적으로 변경되었습니다.");
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 3. 장바구니 상품 개수 변경
    @PatchMapping("/{type}")
    public ResponseEntity<?> modifyItemCart(Authentication authentication, @RequestBody CartItemInfo cartItemInfo, @PathVariable("type") int type){
        try{
            cartService.modifyItemCart(authentication, cartItemInfo, type);
            return ResponseEntity.ok("장바구니 상품 수량이 성공적으로 변경되었습니다.");
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 4. 장바구니 내역 조회
    @GetMapping()
    public List<CartItemDeatilInfo> getCartItem(Authentication authentication){
        try {
            return cartService.getCartItem(authentication);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
