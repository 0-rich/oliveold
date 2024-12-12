package com.youngrich.oliveold.cart.repository;

import com.youngrich.oliveold.domain.Cart;
import com.youngrich.oliveold.domain.CartItem;

import java.util.List;

public interface CartItemRepositoryCustom {

    // 장바구니 상품 전체 조회
    List<CartItem> findByCart(Cart cart);

}
