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
        return em.createQuery("select a from Account a where a.user.userSeq = :userSeq and a.repAccount = true", Account.class)
                .setParameter("userSeq", userSeq)
                .getSingleResult();
    }

    // 현재 대표 계좌 해제
    public void unsetPrimary(Long userSeq){
        em.createQuery("update Account a set a.repAccount = false where a.user.userSeq = :userSeq and a.repAccount = true", Account.class)
                .setParameter("userSeq", userSeq)
                .executeUpdate();
    }

}
