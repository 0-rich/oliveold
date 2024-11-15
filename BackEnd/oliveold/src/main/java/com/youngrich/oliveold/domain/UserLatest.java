package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "user_latest")
@Getter
public class UserLatest {

    // 최근 본 상품 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "latest_seq")
    private Long latestSeq;

    // 사용자
    @ManyToOne
    @JoinColumn(name = "user_seq")
    private User user;

    // 상품
    @ManyToOne
    @JoinColumn(name = "item_seq")
    private Item item;
}
