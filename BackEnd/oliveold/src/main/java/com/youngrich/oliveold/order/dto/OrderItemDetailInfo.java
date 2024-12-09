package com.youngrich.oliveold.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDetailInfo {

    // order-item
    // 주문 가격
    private int orderPrice;
    // 수량
    private int count;

    // item
    // 상품명
    private String itemName;
    // 대표 이미지
    private String itemImg;
    // 상세 이미지
    private String itemDetailImg;
    // 출고 가격
    private int price;

}
