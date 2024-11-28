package com.youngrich.oliveold.delivery.service;

import com.youngrich.oliveold.delivery.dto.*;
import com.youngrich.oliveold.delivery.repository.DeliveryRepository;
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
    private final DeliveryRepository deliveryRepository;

    // 1. 전체 배송지 조회
    @Transactional(readOnly = true)
    public List<DeliveryInfo> getAllDelivery(Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 전체 배송지 조회
        List<Delivery> deliveries = deliveryRepository.findByUser(user);
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
    @Transactional(readOnly = true)
    public DeliveryInfo getPrimaryDelivery(Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 기본 배송지 조회
        Delivery delivery = deliveryRepository.findDeliveryByUserSeq(user.getUserSeq());
        if(delivery == null) throw new IllegalArgumentException("기본 배송지 정보가 없습니다");
        return DeliveryInfo.builder()
                .deliverySeq(delivery.getDeliverySeq())
                .personName(delivery.getPersonName())
                .phone(delivery.getPhone())
                .entranceCode(delivery.getEntranceCode())
                .message(delivery.getMessage())
                .defAddress(delivery.isDefAddress())
                .build();
    }

    // 3. 배송지 추가 등록
    public void registDelivery(NewDeliveryInfo newDeliveryInfo, Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        Delivery delivery = Delivery.builder()
                .personName(newDeliveryInfo.getPersonName())
                .phone(newDeliveryInfo.getPhone())
                .entranceCode(newDeliveryInfo.getEntranceCode())
                .message(newDeliveryInfo.getMessage())
                .defAddress(false)
                .build();
        deliveryRepository.save(delivery);
    }

    // 4. 배송지 정보 수정
    public void modifyDelivery(DeliveryInfo deliveryInfo, Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        Delivery delivery = deliveryRepository.findByDeliverySeqAndUser(deliveryInfo.getDeliverySeq(), user).orElseThrow(() -> new IllegalArgumentException("배송지 정보가 없습니다"));
        // 수정된 필드만 업데이트
        if(deliveryInfo.getPersonName() != null) delivery.setPersonName(deliveryInfo.getPersonName());
        if(deliveryInfo.getPhone() != null) delivery.setPhone(deliveryInfo.getPhone());
        if(deliveryInfo.getEntranceCode() != delivery.getEntranceCode()) delivery.setEntranceCode(deliveryInfo.getEntranceCode());
        if(deliveryInfo.getMessage() != null) delivery.setMessage(deliveryInfo.getMessage());
    }

    // 5. 배송지 삭제
    public void deleteDelivery(DeliverySeqInfo deliverySeqInfo, Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 배송지 조회
        Delivery delivery = deliveryRepository.findByDeliverySeqAndUser(deliverySeqInfo.getDeliverySeq(), user).orElseThrow(() -> new IllegalArgumentException("배송지 정보가 없습니다"));
        deliveryRepository.delete(delivery);
    }

    // 6. 기본 배송지 변경
    public void setPrimaryDelivery(DeliverySeqInfo deliverySeqInfo, Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 기존 기본 배송지 조회
        Delivery beforeDelivery = deliveryRepository.findDeliveryByUserSeq(user.getUserSeq());
        if(beforeDelivery == null) throw new IllegalArgumentException("기본 배송지 정보가 없습니다");
        // 현재 기본 배송지 해제
        beforeDelivery.setDefAddress(false);
        // 새 기본 배송지 설정
        Delivery newDelivery = deliveryRepository.findByDeliverySeqAndUser(deliverySeqInfo.getDeliverySeq(), user).orElseThrow(() -> new IllegalArgumentException("배송지 정보가 없습니다."));
        newDelivery.setDefAddress(true);
    }

    // 7. 공동현관 출입번호 등록
    public void setEntranceNumber(EntranceCodeInfo entranceCodeInfo, Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 배송지 조회
        Delivery delivery = deliveryRepository.findByDeliverySeqAndUser(entranceCodeInfo.getDeliverySeq(), user).orElseThrow(() -> new IllegalArgumentException("배송지 정보가 없습니다"));
        // 출입번호 변경
        delivery.setEntranceCode(entranceCodeInfo.getEntranceCode());
    }

    // 8. 배송 메시지 등록
    public void setDeliveryMessgae(DeliveryMessageInfo deliveryMessageInfo, Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 배송지 조회
        Delivery delivery = deliveryRepository.findByDeliverySeqAndUser(deliveryMessageInfo.getDeliverySeq(), user).orElseThrow(() -> new IllegalArgumentException("배송지 정보가 없습니다"));
        // 배송 메시지 변경
        delivery.setMessage(deliveryMessageInfo.getMessage());
    }

}
