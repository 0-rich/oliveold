package com.youngrich.oliveold.user.repository;

import com.youngrich.oliveold.domain.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // 1. 이메일로 사용자 찾기
    Optional<User> findById(Long userId);
}
