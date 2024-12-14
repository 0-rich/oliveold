package com.youngrich.oliveold.history.repository;

import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.domain.UserLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserLikeHistory extends JpaRepository<UserLike, Long> {

    // 회원 좋아요
    Optional<UserLike> findByUserSeq(Long userSeq);

    // 좋아요 상품 조회
    Optional<UserLike> findByUserItemSeq(User user, Long itemSeq);
}
