package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "account")
@Getter
public class Account {

    // 계좌 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountSeq;

    // 사용자
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq")
    private User user;

    // 계좌번호
    @Column(length = 45)
    private String accountNumber;

    // 은행
    @Column(length = 45)
    private String bank;

    // 대표 계좌 여부
    private boolean repAccount;
}
