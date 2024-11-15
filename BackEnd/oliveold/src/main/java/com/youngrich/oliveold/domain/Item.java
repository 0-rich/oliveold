package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "item")
@Getter
public class Item {

    // 상품 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_seq")
    private Long itemSeq;

    // 카테고리
    @ManyToOne
    @JoinColumn(name = "category_seq")
    private Category category;

    // 좋아요 한 상품
    @OneToMany(mappedBy = "item")
    private List<UserLike> userLikes = new ArrayList<>();

    // 최근 본 상품
    @OneToMany(mappedBy = "item")
    private List<UserLatest> userLatestes = new ArrayList<>();

    // 상품명
    @Column(name = "item_name", length = 45)
    private String itemName;

    // 대표 이미지
    @Column(name = "item_img")
    private String itemImg;

    // 상세 이미지
    @Column(name = "item_detail_img")
    private String itemDetailImg;

    // 가격
    private int price;
}
