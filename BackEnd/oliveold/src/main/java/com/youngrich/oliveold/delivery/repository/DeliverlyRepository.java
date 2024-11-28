package com.youngrich.oliveold.delivery.repository;

import com.youngrich.oliveold.domain.Delivery;
import com.youngrich.oliveold.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DeliverlyRepository extends JpaRepository<Delivery, Long>, DeliveryRepositoryCustom {

    // 전체 배송지 조회
    List<Delivery> findByUser(User user);

    // 특정 배송지 조회
    Optional<Delivery> findBySeqAndUser(Long deliverySeq, User user);
}
