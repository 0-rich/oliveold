package com.youngrich.oliveold.delivery.repository;

import com.youngrich.oliveold.domain.Delivery;
import com.youngrich.oliveold.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeliverlyRepository extends JpaRepository<Delivery, Long> {

    // 전체 계좌 조회
    List<Delivery> findByUser(User user);

}
