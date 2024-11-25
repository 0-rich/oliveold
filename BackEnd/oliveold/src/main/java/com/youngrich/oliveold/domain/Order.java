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
    private Long orderSeq;

    // 회원
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq")
    private User user;

    // 주문상품
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> orderItems = new ArrayList<>();

    // 배송지
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "delivery_seq")
    private Delivery delivery;

    // 주문번호
    private String orderSerial;

    // 구매일시
    private LocalDateTime orderDate;

    // 구매상태
    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    // 배송완료일시
    private LocalDateTime deliveryDate;

    // 연관관계 메서드 - 댜대일
    public void setUser(User user){
        this.user = user;
        user.getOrders().add(this);
    }

    // 연관관계 메서드 - 일대다
    public void addOrderItem(OrderItem orderItem){
        orderItems.add(orderItem);
        orderItem.setOrder(this);
    }

    // 연관관계 메서드 - 일대일
    public void setDelivery(Delivery delivery){
        this.delivery = delivery;
        delivery.setOrder(this);
    }

}
