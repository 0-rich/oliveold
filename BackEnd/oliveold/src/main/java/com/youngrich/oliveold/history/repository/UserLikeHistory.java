package com.youngrich.oliveold.history.repository;

import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.domain.UserLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserLikeHistory extends JpaRepository<UserLike, Long> {

    // 특정 좋아요 상품 조회
    Optional<UserLike> findByUserItemSeq(User user, Long itemSeq);

    // 모든 좋아요 상품 조회
    List<UserLike> findByUser(User user);
}
