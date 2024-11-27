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
<<<<<<< HEAD
    @Column(name = "latest_seq")
    private Long latestSeq;

    // 사용자
    @ManyToOne
=======
    private Long latestSeq;

    // 사용자
    @ManyToOne(fetch = FetchType.LAZY)
>>>>>>> lost-work
    @JoinColumn(name = "user_seq")
    private User user;

    // 상품
<<<<<<< HEAD
    @ManyToOne
=======
    @ManyToOne(fetch = FetchType.LAZY)
>>>>>>> lost-work
    @JoinColumn(name = "item_seq")
    private Item item;
}
