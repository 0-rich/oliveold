package com.youngrich.oliveold.cart.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartItemInfo {

    // 상품 일련번호
    private Long itemSeq;

    // 수량
    private int count;

}
