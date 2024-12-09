package com.youngrich.oliveold.order.dto;

import com.youngrich.oliveold.domain.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemInfo {

    // order
    // 주문 일련번호
    private Long orderSeq;
    // 주문 번호
    private String orderSerial;
    // 구매 일시
    private LocalDateTime orderDate;
    // 상태
    private OrderStatus status;
    // 배송 일시
    private LocalDateTime deliveryDate;

    // 상품 상세 정보
    private List<OrderItemDetailInfo> orderItems;

}
