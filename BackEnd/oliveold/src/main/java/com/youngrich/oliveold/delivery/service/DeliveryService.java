package com.youngrich.oliveold.delivery.service;

import com.youngrich.oliveold.delivery.dto.DeliveryInfo;
import com.youngrich.oliveold.delivery.repository.DeliverlyRepository;
import com.youngrich.oliveold.domain.Delivery;
import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class DeliveryService {

    private final UserRepository userRepository;
    private final DeliverlyRepository deliverlyRepository;

    // 1. 전체 배송지 조회
    public List<DeliveryInfo> getAllDelivery(Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 전체 배송지 조회
        List<Delivery> deliveries = deliverlyRepository.findByUser(user);
        if(deliveries.isEmpty()) throw new IllegalArgumentException("배송지 정보가 없습니다");
        // Dto 반환
        List<DeliveryInfo> deliveryInfos = new ArrayList<>();
        for(Delivery delivery : deliveries){
            DeliveryInfo deliveryInfo = DeliveryInfo.builder()
                    .deliverySeq(delivery.getDeliverySeq())
                    .personName(delivery.getPersonName())
                    .phone(delivery.getPhone())
                    .entranceCode(delivery.getEntranceCode())
                    .message(delivery.getMessage())
                    .defAddress(delivery.isDefAddress())
                    .build();
            deliveryInfos.add(deliveryInfo);
        }
        return deliveryInfos;
    }

    // 2. 기본 배송지 조회

    // 3. 배송지 추가 등록

    // 4. 배송지 삭제

    // 5. 기본 배송지 설정

    // 6. 공동현관 출입번호 등록

    // 7. 배송 메시지 등록

}
