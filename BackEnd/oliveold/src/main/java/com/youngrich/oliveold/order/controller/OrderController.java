package com.youngrich.oliveold.order.controller;

import com.youngrich.oliveold.order.dto.OrderItemInfo;
import com.youngrich.oliveold.order.service.OrderService;
import com.youngrich.oliveold.user.dto.Response.LoginResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/order")
public class OrderController {

    private final OrderService orderService;

    // 1. 주문/배송 조회
    @GetMapping()
    public List<OrderItemInfo> getOrderDeliveryItem(Authentication authentication){
        try{
            return orderService.getOrderDeliveryItem(authentication);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 2. 최소/반품/교환 내역 조회

    // 3.주문 상세내역 조회

}
