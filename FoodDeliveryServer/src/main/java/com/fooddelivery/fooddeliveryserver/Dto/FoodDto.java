package com.fooddelivery.fooddeliveryserver.Dto;

import lombok.Data;

@Data
public class FoodDto {
    private Long id;
    private String name;
    private boolean hasSauce;
}
