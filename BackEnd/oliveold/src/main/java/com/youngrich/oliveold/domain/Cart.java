package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "cart")
@Getter
public class Cart {

    // 장바구니 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_seq")
    private Long cartSeq;

    // 사용자
    @OneToOne(mappedBy = "cart")
    private User user;

    // 장바구니 상품
    @OneToMany(mappedBy = "cart")
    private List<CartItem> cartitems = new ArrayList<>();
}
