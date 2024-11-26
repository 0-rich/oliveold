package com.youngrich.oliveold.account.repository;

import com.youngrich.oliveold.domain.Account;

public interface AccountRepositoryCustom {

    // 대표 계좌 조회
    Account findOne(Long userSeq);

    // 현재 대표 계좌 해제
    void unsetPrimary(Long userSeq);

}
