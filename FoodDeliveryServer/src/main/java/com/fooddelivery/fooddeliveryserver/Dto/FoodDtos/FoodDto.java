package com.fooddelivery.fooddeliveryserver.Dto.FoodDtos;

import lombok.Data;

@Data
public class FoodDto {
    private Long id;
    private String name;
    private String description;
    private String ingredients;
    private int price;
}
