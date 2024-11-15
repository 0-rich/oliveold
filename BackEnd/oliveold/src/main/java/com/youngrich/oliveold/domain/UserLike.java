package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "user_like")
@Getter
public class UserLike {

    // 좋아요 한 상품 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "like_seq")
    private Long likeSeq;

    // 사용자
    @ManyToOne
    @JoinColumn(name = "user_seq")
    private User user;

    // 상품
    @ManyToOne
    @JoinColumn(name = "item_seq")
    private Item item;
}
