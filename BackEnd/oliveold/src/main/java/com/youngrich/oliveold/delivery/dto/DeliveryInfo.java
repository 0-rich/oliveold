package com.youngrich.oliveold.delivery.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryInfo {

    private Long deliverySeq;
    private String personName;
    private String phone;
    private int entranceCode;
    private String message;
    private boolean defAddress;

}
