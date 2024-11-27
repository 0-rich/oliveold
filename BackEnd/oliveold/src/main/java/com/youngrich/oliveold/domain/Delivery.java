package com.youngrich.oliveold.domain;

import com.youngrich.oliveold.domain.Address;
import com.youngrich.oliveold.domain.Order;
import com.youngrich.oliveold.domain.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity(name = "delivery")
public class Delivery {

    // 배송지 일련번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name = "delivery_seq")
    private Long deliverySeq;

    // 사용자 일련번호
    @ManyToOne
    @JoinColumn(name = "user_seq")
    private User user;

    @OneToOne(mappedBy = "delivery")
=======
    private Long deliverySeq;

    // 사용자 일련번호
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq")
    private User user;

    @OneToOne(mappedBy = "delivery", fetch = FetchType.LAZY)
>>>>>>> lost-work
    private Order order;

    @Embedded
    private Address address;

    // 이름
<<<<<<< HEAD
    @Column(name = "person_name", length = 45)
=======
    @Column(length = 45)
>>>>>>> lost-work
    private String personName;

    // 연락처
    @Column(length = 11)
    private String phone;

    // 공동현관 출입번호
<<<<<<< HEAD
    @Column(name = "entrance_code")
=======
>>>>>>> lost-work
    private int entranceCode;

    // 배송메시지
    @Column(length = 100)
    private String message;

    // 기본배송지
<<<<<<< HEAD
    @Column(name = "def_address")
    private boolean defAddress;

=======
    private boolean defAddress;

    public void setOrder(Order order) {
        this.order = order;
    }
>>>>>>> lost-work
}
