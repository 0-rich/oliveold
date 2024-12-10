package com.youngrich.oliveold.order.service;

import com.youngrich.oliveold.domain.Order;
import com.youngrich.oliveold.domain.OrderItem;
import com.youngrich.oliveold.domain.OrderStatus;
import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.order.dto.OrderItemDetailInfo;
import com.youngrich.oliveold.order.dto.OrderItemInfo;
import com.youngrich.oliveold.order.repository.OrderRepository;
import com.youngrich.oliveold.orderItem.repository.OrderItemRepository;
import com.youngrich.oliveold.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderService {

    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    // 1. 주문/배송 조회
    @Transactional(readOnly = true)
    public List<OrderItemInfo> getOrderDeliveryItem(Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 전체 주문 내역 조회
        List<Order> orders = orderRepository.findAllOrders(user.getUserSeq());
        // Dto 반환
        List<OrderItemInfo> orderItemInfos = new ArrayList<>();
        for(Order order : orders){
            // OrderItemDetailInfo 리스트 구성
            List<OrderItemDetailInfo> orderItemDetailInfos = new ArrayList<>();
            for(OrderItem oi : order.getOrderItems()){
                OrderItemDetailInfo orderItemDetailInfo = OrderItemDetailInfo.builder()
                        .orderItemState(oi.getStatus())
                        .orderPrice(oi.getOrderPrice())
                        .count(oi.getCount())
                        .itemName(oi.getItem().getItemName())
                        .itemImg(oi.getItem().getItemImg())
                        .itemDetailImg(oi.getItem().getItemDetailImg())
                        .price(oi.getItem().getPrice())
                        .build();
                orderItemDetailInfos.add(orderItemDetailInfo);
            }
            // OrderItemInfo 리스트 구성
            OrderItemInfo orderItemInfo = OrderItemInfo.builder()
                    .orderSeq(order.getOrderSeq())
                    .orderSerial(order.getOrderSerial())
                    .orderDate(order.getOrderDate())
                    .status(order.getStatus())
                    .deliveryDate(order.getDeliveryDate())
                    .orderItems(orderItemDetailInfos)
                    .build();
            orderItemInfos.add(orderItemInfo);
        }
        return orderItemInfos;
    }

    // 2. 최소/반품/교환 내역 조회
    @Transactional(readOnly = true)
    public List<OrderItemInfo> getOrderUnDeliveryItem(Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 전체 최소/반품/교환 내역 조회
        List<Order> orders = orderRepository.findAllUnOrders(user.getUserSeq());
        // Dto 반환
        List<OrderItemInfo> orderItemInfos = new ArrayList<>();
        for(Order order : orders){
            // OrderItemDetailInfo 리스트 구성
            List<OrderItemDetailInfo> orderItemDetailInfos = new ArrayList<>();
            for(OrderItem oi : order.getOrderItems()){
                OrderItemDetailInfo orderItemDetailInfo = OrderItemDetailInfo.builder()
                        .orderItemState(oi.getStatus())
                        .orderPrice(oi.getOrderPrice())
                        .count(oi.getCount())
                        .itemName(oi.getItem().getItemName())
                        .itemImg(oi.getItem().getItemImg())
                        .itemDetailImg(oi.getItem().getItemDetailImg())
                        .price(oi.getItem().getPrice())
                        .build();
                orderItemDetailInfos.add(orderItemDetailInfo);
            }
            // OrderItemInfo 리스트 구성
            OrderItemInfo orderItemInfo = OrderItemInfo.builder()
                    .orderSeq(order.getOrderSeq())
                    .orderSerial(order.getOrderSerial())
                    .orderDate(order.getOrderDate())
                    .status(order.getStatus())
                    .deliveryDate(order.getDeliveryDate())
                    .orderItems(orderItemDetailInfos)
                    .build();
            orderItemInfos.add(orderItemInfo);
        }
        return orderItemInfos;
    }

    // 3.주문 상세내역 조회
}
