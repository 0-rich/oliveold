package com.youngrich.oliveold.item.repository;

import com.youngrich.oliveold.domain.Item;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ItemRepositoryImpl implements ItemRepositoryCustom{

    private final EntityManager em;

    // 특정 검색어로 상품 조회
    public Optional<List<Item>> searchByContent(String keyword){

        String jpql = "select i from Item i where i.itemName like concat('%', :keyword, '%)";

        return Optional.ofNullable(em.createQuery(jpql, Item.class)
                .setParameter("keyword", keyword)
                .getResultList());
    }

}
