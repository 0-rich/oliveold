package com.youngrich.oliveold.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
<<<<<<< HEAD
=======
import lombok.Builder;
>>>>>>> lost-work
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "account")
@Getter
<<<<<<< HEAD
=======
@Builder
>>>>>>> lost-work
public class Account {

    // 계좌 일련번호
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name = "account_seq")
    private Long accountSeq;

    // 사용자
    @ManyToOne
=======
    private Long accountSeq;

    // 사용자
    @ManyToOne(fetch = FetchType.LAZY)
>>>>>>> lost-work
    @JoinColumn(name = "user_seq")
    private User user;

    // 계좌번호
<<<<<<< HEAD
    @Column(name = "account_number", length = 45)
=======
    @Column(length = 45)
>>>>>>> lost-work
    private String accountNumber;

    // 은행
    @Column(length = 45)
    private String bank;

    // 대표 계좌 여부
<<<<<<< HEAD
    @Column(name = "rep_account")
    private boolean repAccount;
=======
    private boolean repAccount;

    // 대표 계좌 변경
    public void setPrimary(boolean isRepAccount){
        this.repAccount = isRepAccount;
    }
>>>>>>> lost-work
}
