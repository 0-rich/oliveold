package com.youngrich.oliveold.order.dto;

import com.youngrich.oliveold.domain.Address;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDeliveryInfo {

    // 배송지 일련번호
    private Long deliverySeq;

    // 이름
    private String personName;

    // 연락처
    private String phone;

    // 주소
    private Address address;

    // 공동현관 출입번호
    private int entranceCode;

    // 배송 메시지
    private String message;

    // 기본 배송지
    private boolean defAddress;

}
