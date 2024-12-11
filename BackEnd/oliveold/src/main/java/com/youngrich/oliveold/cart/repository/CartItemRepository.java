package com.youngrich.oliveold.cart.repository;

import com.youngrich.oliveold.domain.Cart;
import com.youngrich.oliveold.domain.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    Optional<CartItem> findByItemSeqAndCart(Long itemSeq, Cart cart);

}
