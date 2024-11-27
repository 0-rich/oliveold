package com.youngrich.oliveold.delivery.repository;

import com.youngrich.oliveold.domain.Delivery;
import com.youngrich.oliveold.domain.User;

public interface DeliveryRepositoryCustom {

    // 기본 배송지 조회
    Delivery findOne(Long userSeq);

}
