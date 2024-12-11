package com.youngrich.oliveold.cart.repository;

import com.youngrich.oliveold.domain.Cart;
import com.youngrich.oliveold.domain.CartItem;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CartRepositoryImpl implements CartRepositoryCustom{

    private final EntityManager em;

    // 장바구니 상품 전체 조회
    public List<CartItem> findByCart(Cart cart){
        String jpql = "select ci from cartItem ci " +
                "join fetch ci.item"  +
                "where ci.cart = :cart";

        return em.createQuery(jpql, CartItem.class)
                .setParameter("cart", cart)
                .getResultList();
    }


}
