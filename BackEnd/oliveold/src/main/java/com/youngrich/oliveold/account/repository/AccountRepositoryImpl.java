package com.youngrich.oliveold.account.repository;

import com.youngrich.oliveold.domain.Account;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AccountRepositoryImpl implements AccountRepositoryCustom{

    private final EntityManager em;

    // 대표 계좌 조회
    public Account findOne(Long userSeq){
        return em.createQuery("select a from Account a where a.user_seq = :user_seq and a.rep_account = true", Account.class)
                .setParameter("user_seq", userSeq)
                .getSingleResult();
    }

}
