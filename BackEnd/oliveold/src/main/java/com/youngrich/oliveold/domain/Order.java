package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.lang.reflect.Member;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "orders")
@Getter
public class Order {

    // 주문 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_seq")
    private Long orderSeq;

    // 회원
    @ManyToOne
    @JoinColumn(name = "user_seq")
    private User user;

    // 주문상품
    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems = new ArrayList<>();

    // 배송지
    @OneToOne
    @JoinColumn(name = "delivery_seq")
    private Delivery delivery;

    // 주문번호
    @Column(name = "order_serial")
    private String orderSerial;

    // 구매일시
    @Column(name = "order_date")
    private LocalDateTime orderDate;

    // 구매상태
    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    // 배송완료일시
    @Column(name = "delivery_date")
    private LocalDateTime deliveryDate;

}
