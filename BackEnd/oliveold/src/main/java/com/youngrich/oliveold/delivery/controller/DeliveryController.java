package com.youngrich.oliveold.delivery.controller;


import com.youngrich.oliveold.delivery.dto.DeliveryInfo;
import com.youngrich.oliveold.delivery.dto.NewDeliveryInfo;
import com.youngrich.oliveold.delivery.service.DeliveryService;
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
    @GetMapping("/primary")
    public DeliveryInfo getPrimaryDelivery(Authentication authentication){
        try{
            return deliveryService.getPrimaryDelivery(authentication);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 3. 배송지 추가 등록
    @PostMapping()
    public ResponseEntity<?> registDelivery(@RequestBody NewDeliveryInfo newDeliveryInfo, Authentication authentication){
        try{
             deliveryService.registDelivery(newDeliveryInfo, authentication);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 4. 배송지 정보 수정
    @PatchMapping()
    public ResponseEntity<?> modifyDelivery(@RequestBody DeliveryInfo deliveryInfo, Authentication authentication){
        try{
            deliveryService.modifyDelivery(deliveryInfo, authentication);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 5. 배송지 삭제

    // 6. 기본 배송지 설정

    // 7. 공동현관 출입번호 등록

    // 8. 배송 메시지 등록

}
