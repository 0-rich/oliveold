package com.youngrich.oliveold.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;

@Embeddable
@Getter
public class Address {
    // 배송지명
    private String placeName;

    // 주소
    private String address;

    // 상세주소
    private String addressDetail;

    // 값이 변경되지 않도록, 생성할 때만 값 세팅
    public Address(String placeName, String address, String addressDetail){
        this.placeName = placeName;
        this.address = address;
        this.addressDetail = addressDetail;
    }
}
