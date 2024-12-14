package com.youngrich.oliveold.history.service;

import com.youngrich.oliveold.domain.Item;
import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.domain.UserLike;
import com.youngrich.oliveold.history.dto.LikeItemInfo;
import com.youngrich.oliveold.history.repository.UserLikeHistory;
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
    public void deleteLike(Authentication authentication, Long itemSeq) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 좋아요 기록 조회
        UserLike userLike = userLikeHistory.findByUserItemSeq(user, itemSeq).orElseThrow(() -> new IllegalArgumentException("해당 상품의 좋아요 기록이 없습니다."));
        userLikeHistory.delete(userLike);
    }

    // 3. 좋아요 한 상품 전체 조회
    @Transactional(readOnly = true)
    public List<LikeItemInfo> getAllLike(Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 좋아요 기록 조회
        List<UserLike> userLikes = userLikeHistory.findByUser(user);
        // Dto 반환
        List<LikeItemInfo> likeItemInfos = new ArrayList<>();
        for(UserLike userLike : userLikes){
            LikeItemInfo likeItemInfo = LikeItemInfo.builder()
                    .itemSeq(userLike.getItem().getItemSeq())
                    .build();
            likeItemInfos.add(likeItemInfo);
        }
        return likeItemInfos;
    }

}
