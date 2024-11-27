package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "category")
@Getter
public class Category {

    // 카테고리 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name = "category_seq")
    private Long categorySeq;

    @Column(name = "category_name", length = 45)
    private String categoryName;

    // 상품
    @OneToMany(mappedBy = "category")
=======
    private Long categorySeq;

    @Column(length = 45)
    private String categoryName;

    // 상품
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
>>>>>>> lost-work
    private List<Item> items = new ArrayList<>();

//    // 카테고리명
//    @Enumerated(EnumType.STRING)
//    private CategoryName categoryName;
//
//    // 상세 카테코리명
//    @Enumerated(EnumType.STRING)
//    private CategoryDetailName categoryDetailName;

    // 계층 구조
    // 자식 입장에서 내 부모
<<<<<<< HEAD
    @ManyToOne
=======
    @ManyToOne(fetch = FetchType.LAZY)
>>>>>>> lost-work
    @JoinColumn(name = "parent_id")
    private Category parent;

    // 부모 입장에서 내 자식
<<<<<<< HEAD
    @OneToMany(mappedBy = "parent")
    private List<Category> child = new ArrayList<>();
=======
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL)
    private List<Category> child = new ArrayList<>();

    // 연관관계 메서드
    public void addChildCategory(Category child){
        this.child.add(child);
        child.setParent(this);
    }

    private void setParent(Category parent) {
        this.parent = parent;
    }
>>>>>>> lost-work
}
