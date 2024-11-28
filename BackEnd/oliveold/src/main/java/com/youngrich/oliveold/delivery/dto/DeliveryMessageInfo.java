package com.youngrich.oliveold.delivery.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryMessageInfo {

    private Long deliverySeq;
    private String message;

}
