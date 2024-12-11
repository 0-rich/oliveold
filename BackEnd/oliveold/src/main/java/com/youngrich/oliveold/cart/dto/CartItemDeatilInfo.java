package com.youngrich.oliveold.cart.dto;

import com.youngrich.oliveold.domain.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartItemDeatilInfo {

    // 상품 일련번호
    private Long itemSeq;

    // 장바구니-상품 일련번호
    private Long cartItemSeq;

    // 카테고리
    private Category category;

    // 상품명
    private String itemName;

    // 대표 이미지
    private String itemImg;

    // 상세 이미지
    private String itemDetailImg;

    // 가격
    private int price;

    // 수량
    private int count;

}
