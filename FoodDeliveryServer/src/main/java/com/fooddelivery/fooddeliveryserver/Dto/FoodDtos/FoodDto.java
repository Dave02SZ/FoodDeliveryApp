package com.fooddelivery.fooddeliveryserver.Dto.FoodDtos;

import lombok.Data;

@Data
public class FoodDto {
    private Long id;
    private String name;
    private boolean hasSauce;
}
