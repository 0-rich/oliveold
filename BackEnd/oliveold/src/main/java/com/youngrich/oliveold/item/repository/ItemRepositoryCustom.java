package com.youngrich.oliveold.item.repository;

import com.youngrich.oliveold.domain.Item;

import java.util.List;
import java.util.Optional;

public interface ItemRepositoryCustom {


    // 특정 검색어로 상품 조회
    Optional<List<Item>> searchByContent(String keyword);
}
