package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "cart_item")
@Getter
public class CartItem {

    // 장바구니 상품 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Long cartItemSeq;

    // 상품
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_seq", nullable = false)
    private Item item;

    // 장바구니
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_seq", nullable = false)
    private Cart cart;

    // 수량
    private int count;

}
