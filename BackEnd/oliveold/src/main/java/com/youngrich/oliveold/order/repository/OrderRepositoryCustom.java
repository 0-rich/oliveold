package com.youngrich.oliveold.order.repository;

import com.youngrich.oliveold.domain.Order;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepositoryCustom {

    // 전체 주문내역 조회 - fetch join
    List<Order> findAllOrders(Long userSeq);

}
