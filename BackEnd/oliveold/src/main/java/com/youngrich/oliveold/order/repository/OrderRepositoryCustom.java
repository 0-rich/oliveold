package com.youngrich.oliveold.order.repository;

import com.youngrich.oliveold.domain.Order;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface OrderRepositoryCustom {

    // 전체 주문 내역 조회 - fetch join
    List<Order> findAllOrders(Long userSeq);

    // 취소/반품/교환 내역 조회 - fetch join
    List<Order> findAllUnOrders(Long userSeq);

    // 주문 상세 내역 조회 - fetch join
    Optional<Order> findOneOrder(Long userSeq, Long orderSeq);

}
