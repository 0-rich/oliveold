package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "order_item")
@Getter
public class OrderItem {

    // 주문 상품 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemSeq;

    // 상품
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    // 주문
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_seq")
    private Order order;

    // 주문 상품 상태
    @Enumerated(EnumType.STRING)
    private OrderItemStatus status;

    // 주문 당시 상품 가격
    private int orderPrice;

    // 주문 수량
    private int count;
}
