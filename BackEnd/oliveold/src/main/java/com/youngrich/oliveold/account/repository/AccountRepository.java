package com.youngrich.oliveold.account.repository;

import com.youngrich.oliveold.domain.Account;
import com.youngrich.oliveold.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long>, AccountRepositoryCustom {

    // 전체 계좌 조회
    List<Account> findByUser(User user);

    // 특정 계좌 조회
    Optional<Account> findByIdAndUserId(Long accountSeq, Long userSeq);

}
