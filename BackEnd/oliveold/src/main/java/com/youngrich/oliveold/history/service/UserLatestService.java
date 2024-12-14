package com.youngrich.oliveold.history.service;

import com.youngrich.oliveold.domain.Item;
import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.domain.UserLatest;
import com.youngrich.oliveold.history.repository.UserLatestRepository;
import com.youngrich.oliveold.item.repository.ItemRepository;
import com.youngrich.oliveold.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserLatestService {

    private final UserRepository userRepository;
    private final ItemRepository itemRepository;
    private final UserLatestRepository userLatestRepository;

    // 1. 최근 본 상품 등록
    public void setLatest(Authentication authentication, Long itemSeq) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 상품 조회
        Item item = itemRepository.findByItemSeq(itemSeq).orElseThrow(() -> new IllegalArgumentException("상품 정보가 없습니다."));
        // 최근 본 상품 등록
        UserLatest userLatest = UserLatest.builder()
                .user(user)
                .item(item)
                .build();
        userLatestRepository.save(userLatest);
    }

    // 2. 최근 본 상품 전체 조회

}
