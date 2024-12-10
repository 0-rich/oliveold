package com.youngrich.oliveold.order.repository;

import com.youngrich.oliveold.domain.Order;
import com.youngrich.oliveold.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>, OrderRepositoryCustom {

    // 전체 주문내역 조회
    Optional<List<Order>> findByUser(User user);

}
