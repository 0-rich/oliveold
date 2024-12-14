package com.youngrich.oliveold.history.repository;

import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.domain.UserLatest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserLatestRepository extends JpaRepository<UserLatest, Long> {

    // 최근 본 상품 전체 조회
    List<UserLatest> findByUser(User user);
}
