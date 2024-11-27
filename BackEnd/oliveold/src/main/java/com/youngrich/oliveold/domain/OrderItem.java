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
<<<<<<< HEAD
    @Column(name = "order_item_seq")
    private Long orderItemSeq;

    // 상품
    @ManyToOne
=======
    private Long orderItemSeq;

    // 상품
    @ManyToOne(fetch = FetchType.LAZY)
>>>>>>> lost-work
    @JoinColumn(name = "item_id")
    private Item item;

    // 주문
<<<<<<< HEAD
    @ManyToOne
=======
    @ManyToOne(fetch = FetchType.LAZY)
>>>>>>> lost-work
    @JoinColumn(name = "order_seq")
    private Order order;

    // 주문 상품 상태
    @Enumerated(EnumType.STRING)
    private OrderItemStatus status;

    // 주문 당시 상품 가격
<<<<<<< HEAD
    @Column(name = "order_price")
=======
>>>>>>> lost-work
    private int orderPrice;

    // 주문 수량
    private int count;
<<<<<<< HEAD
=======

    public void setOrder(Order order) {
        this.order = order;
    }
>>>>>>> lost-work
}
