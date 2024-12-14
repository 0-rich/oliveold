package com.youngrich.oliveold.history.service;

import com.youngrich.oliveold.domain.Item;
import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.domain.UserLike;
import com.youngrich.oliveold.history.repository.UserLikeHistory;
import com.youngrich.oliveold.item.repository.ItemRepository;
import com.youngrich.oliveold.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserLikeService {

    private final UserRepository userRepository;
    private final ItemRepository itemRepository;
    private final UserLikeHistory userLikeHistory;

    // 1. 좋아요 등록
    public void setLike(Authentication authentication, Long itemSeq) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 상품 조회
        Item item = itemRepository.findByItemSeq(itemSeq).orElseThrow(() -> new IllegalArgumentException("상품 정보가 없습니다."));
        // 좋아요 기록 저장
        UserLike userLike = UserLike.builder()
                .user(user)
                .item(item)
                .build();
        userLikeHistory.save(userLike);
    }

    // 2. 좋아요 취소

    // 3. 좋아요 한 상품 전체 조회
}
