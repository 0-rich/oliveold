package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@Getter @Setter
@Entity(name = "user")
public class User {

    // 사용자 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userSeq;

    // 등급
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "grade_seq")
    private Grade grade;

    // 배송지
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Delivery> delivery = new ArrayList<>();

    // 주문
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders = new ArrayList<>();

    // 계좌
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Account> accounts = new ArrayList<>();

    // 장바구니
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_seq")
    private Cart cart;

    // 좋아요 한 상품
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserLike> userLikes = new ArrayList<>();

    // 최근 본 상품
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserLatest> userLatestes = new ArrayList<>();

    // 카카오 유저 아이디
    private Long userId;

    // 아이디
    private String loginId;

    // 비밀번호
    private String loginPw;

    // 이메일
//    private String email;

    // 이름
    @Column(length = 45)
    private String name;

    // 휴대폰번호
    @Column(length = 11)
    private String phone;

    // 나이
    private int age;

    // 닉네임
    @Column(length = 45)
    private String nickname;

    // 프로필사진
    @Column(length = 100)
    private String profileImg;

    // refreshToken: JWT refresh_token
    private String refreshToken;

    // 만료일시
    private LocalDateTime expiredAt;

    // 결제 비밀번호
    private int pinPw;

    // 로그인 타입
    @Enumerated(EnumType.STRING)
    private LoginType loginType;
}
