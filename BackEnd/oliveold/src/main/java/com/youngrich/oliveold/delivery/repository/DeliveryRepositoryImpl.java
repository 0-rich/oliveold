package com.youngrich.oliveold.delivery.repository;

import com.youngrich.oliveold.domain.Delivery;
import com.youngrich.oliveold.domain.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class DeliveryRepositoryImpl implements DeliveryRepositoryCustom{

    private final EntityManager em;

    // 기본 배송지 조회
    @Override
    public Delivery findDeliveryByUserSeq(Long userSeq){
        return em.createQuery("select d from Delivery d where d.user.userSeq = :userSeq and d.defAddress = true", Delivery.class)
                .setParameter("userSeq", userSeq)
                .getSingleResult();
    }

}
