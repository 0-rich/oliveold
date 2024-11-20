package com.youngrich.oliveold.domain;

import com.youngrich.oliveold.domain.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity(name = "grade")
public class Grade {

    // 등급 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gradeSeq;

    @OneToMany(mappedBy = "grade", cascade = CascadeType.ALL)
    private List<User> users = new ArrayList<>();

    // 등급명
    @Column(length = 45)
    private String gradeName;

    // 기준 금액
    private int criteriaAmount;

    // 적립률
    private double rewardRate;
}
