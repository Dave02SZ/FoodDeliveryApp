package com.fooddelivery.fooddeliveryserver.Dto.OrderDtos;

import com.fooddelivery.fooddeliveryserver.models.enums.Status;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Getter
@Setter
public class OrderStatusDto {
    private Status status;
}
