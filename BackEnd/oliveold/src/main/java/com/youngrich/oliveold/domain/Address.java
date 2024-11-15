package com.youngrich.oliveold.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;

@Embeddable
@Getter
public class Address {
    // 배송지명
//    @Column(name = "place_name", length = 45, nullable = false)
    private String placeName;

    // 주소
//    @Column(length = 100, nullable = false)
    private String address;

    // 상세주소
//    @Column(name = "address_detail", length = 100, nullable = false)
    private String addressDetail;
}
