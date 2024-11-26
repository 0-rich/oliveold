package com.youngrich.oliveold.account.repository;

import com.youngrich.oliveold.domain.Account;

public interface AccountRepositoryCustom {

    // 대표 계좌 조회
    public Account findOne(Long userSeq);

}
