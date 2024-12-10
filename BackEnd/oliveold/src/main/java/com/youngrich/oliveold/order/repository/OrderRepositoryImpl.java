package com.youngrich.oliveold.order.repository;

import com.youngrich.oliveold.domain.Order;
import com.youngrich.oliveold.domain.OrderItemStatus;
import com.youngrich.oliveold.domain.OrderStatus;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class OrderRepositoryImpl implements OrderRepositoryCustom{

    private final EntityManager em;

    // 전체 주문 내역 조회 - fetch join
    public List<Order> findAllOrders(Long userSeq){

        String jpql = "select o from Order o" +
                "join fetch o.orderItem oi" +
                "join fetch oi.item i" +
                "where o.userSeq = :userSeq";

        return em.createQuery(jpql, Order.class)
                .setParameter("userSeq", userSeq)
                .getResultList();
    }

    // 취소/반품/교환 내역 조회 - fetch join
    public List<Order> findAllUnOrders(Long userSeq){

        String jpql = "select o from Order o" +
                "join fetch o.orderItem oi" +
                "join fetch oi.item i" +
                "where o.userSeq = :userSeq" +
                "and where oi.status in :statuses";

        return em.createQuery(jpql, Order.class)
                .setParameter("userSeq", userSeq)
                .setParameter("statuses", List.of(OrderItemStatus.CANCELED, OrderItemStatus.RETURNED, OrderItemStatus.EXCHANGED))
                .getResultList();

    }

}
