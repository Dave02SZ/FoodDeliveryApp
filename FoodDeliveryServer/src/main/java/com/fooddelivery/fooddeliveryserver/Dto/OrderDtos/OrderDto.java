package com.fooddelivery.fooddeliveryserver.Dto.OrderDtos;

import com.fooddelivery.fooddeliveryserver.Dto.OrderItemDtos.OrderItemDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private Long id;
    private String status;
    private List<OrderItemDto> orderItems;
}