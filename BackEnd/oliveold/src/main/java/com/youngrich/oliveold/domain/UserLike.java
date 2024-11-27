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
<<<<<<< HEAD
    @Column(name = "like_seq")
    private Long likeSeq;

    // 사용자
    @ManyToOne
=======
    private Long likeSeq;

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
