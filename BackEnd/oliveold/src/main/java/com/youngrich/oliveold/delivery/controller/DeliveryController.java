package com.youngrich.oliveold.delivery.controller;


import com.youngrich.oliveold.delivery.dto.DeliveryInfo;
import com.youngrich.oliveold.delivery.service.DeliveryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/delivery")
public class DeliveryController {

    private final DeliveryService deliveryService;

    // 1. 전체 배송지 조회
    @GetMapping()
    public List<DeliveryInfo> getAllDelivery(Authentication authentication){
        try{
            return deliveryService.getAllDelivery(authentication);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 2. 기본 배송지 조회

    // 3. 배송지 추가 등록

    // 4. 배송지 삭제

    // 5. 기본 배송지 설정

    // 6. 공동현관 출입번호 등록

    // 7. 배송 메시지 등록

}
