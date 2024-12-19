package com.fooddelivery.fooddeliveryserver.Dto.OrderItemDtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDto {
    private Long foodId;
    private Long drinkId;

}
