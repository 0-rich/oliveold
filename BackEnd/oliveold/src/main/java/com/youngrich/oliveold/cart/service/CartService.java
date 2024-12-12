package com.youngrich.oliveold.cart.service;

import com.youngrich.oliveold.cart.dto.CartItemDeatilInfo;
import com.youngrich.oliveold.cart.dto.CartItemInfo;
import com.youngrich.oliveold.cart.repository.CartItemRepository;
import com.youngrich.oliveold.cart.repository.CartRepository;
import com.youngrich.oliveold.domain.Cart;
import com.youngrich.oliveold.domain.CartItem;
import com.youngrich.oliveold.domain.Item;
import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.item.repository.ItemRepository;
import com.youngrich.oliveold.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CartService {

    private final UserRepository userRepository;
    private final ItemRepository itemRepository;
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;

    // 1. 장바구니 상품 담기
    public void setItemCart(Authentication authentication, CartItemInfo cartItemInfo) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 장바구니 조회
        Cart cart = cartRepository.findByUser(user).orElseThrow(() -> new IllegalArgumentException("장바구니가 없습니다."));
        // 상품 조회
        Item item = itemRepository.findByItemSeq(cartItemInfo.getItemSeq()).orElseThrow(() -> new IllegalArgumentException("상품 정보가 없습니다."));

        // 장바구니에 동일 상품이 있는지 확인
        CartItem cartItem = cartItemRepository.findByCartItemSeqAndCart(item.getItemSeq(), cart).orElse(null);
        if(cartItem != null){
            // 이미 존재하는 경우
            cartItem.updateCount(cartItem.getCount() + cartItemInfo.getCount());
        }else{
            // 존재하지 않는 경우 새 cartItem으로 장바구니에 추가
            cartItem = new CartItem(item, cart, cartItemInfo.getCount());
            cart.getCartitems().add(cartItem);  // 연관관계에 추가
        }

        cartItemRepository.save(cartItem);
    }

    // 2. 장바구니 상품 삭제
    public void deleteItemCart(Authentication authentication, Long cartItemSeq) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 장바구니 조회
        Cart cart = cartRepository.findByUser(user).orElseThrow(() -> new IllegalArgumentException("장바구니가 없습니다."));
        // 장바구니 상품 조회
        CartItem cartItem = cartItemRepository.findByCartItemSeqAndCart(cartItemSeq, cart).orElseThrow(() -> new IllegalArgumentException("장바구니에 해당 상품이 없습니다."));

        // 장바구니 상품 삭제
        cart.getCartitems().remove(cartItem);   // 연관관계에서 삭제
        cartItemRepository.delete(cartItem);
    }

    // 3. 장바구니 상품 개수 변경
    public void modifyItemCart(Authentication authentication, CartItemInfo cartItemInfo, int type) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 장바구니 조회
        Cart cart = cartRepository.findByUser(user).orElseThrow(() -> new IllegalArgumentException("장바구니가 없습니다."));
        // 장바구니 상품 조회
        CartItem cartItem = cartItemRepository.findByCartItemSeqAndCart(cartItemInfo.getItemSeq(), cart).orElseThrow(() -> new IllegalArgumentException("장바구니에 해당 상품이 없습니다."));
        // 상품 개수 변경
        if(type == 0){
            // 증가
            cartItem.updateCount(cartItem.getCount() + cartItemInfo.getCount());
        }else if( type == 1){
            // 감소
            int updateCount = cartItem.getCount() - cartItemInfo.getCount();
            if(updateCount < 0){
                throw  new IllegalArgumentException("상품 수량이 0 이하입니다.");
            }
            cartItem.updateCount(updateCount);
        }else {
            throw new IllegalArgumentException("(0: 증가, 1: 감소) 외 타입입니다.");
        }
        cartItemRepository.save(cartItem);
    }

    // 4. 장바구니 내역 조회
    public List<CartItemDeatilInfo> getCartItem(Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 장바구니 조회
        Cart cart = cartRepository.findByUser(user).orElseThrow(() -> new IllegalArgumentException("장바구니가 없습니다."));
        // 장바구니 상품 조회
        List<CartItem> cartItems = cartItemRepository.findByCart(cart);

        if(cartItems.isEmpty()) throw new IllegalArgumentException("장바구니에 상품이 없습니다.");

        // Dto 반환
        List<CartItemDeatilInfo> cartItemDeatilInfos = new ArrayList<>();
        for(CartItem cartItem : cartItems){
            CartItemDeatilInfo cartItemDeatilInfo = CartItemDeatilInfo.builder()
                    .itemSeq(cartItem.getItem().getItemSeq())
                    .cartItemSeq(cartItem.getCartItemSeq())
                    .category(cartItem.getItem().getCategory())
                    .itemName(cartItem.getItem().getItemName())
                    .itemImg(cartItem.getItem().getItemImg())
                    .itemDetailImg(cartItem.getItem().getItemDetailImg())
                    .price(cartItem.getItem().getPrice())
                    .count(cartItem.getCount())
                    .build();
            cartItemDeatilInfos.add(cartItemDeatilInfo);
        }

        return cartItemDeatilInfos;
    }

}
