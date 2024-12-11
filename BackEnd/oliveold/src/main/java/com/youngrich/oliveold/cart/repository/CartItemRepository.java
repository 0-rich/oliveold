package com.youngrich.oliveold.cart.repository;

import com.youngrich.oliveold.domain.Cart;
import com.youngrich.oliveold.domain.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long>, CartRepositoryCustom {

    // 상품 조회
    Optional<CartItem> findByItemSeqAndCart(Long itemSeq, Cart cart);

    // 장바구니 상품 특정 조회
    Optional<CartItem> findByCartItemSeqAndCart(Long cartItemSeq, Cart cart);

}
