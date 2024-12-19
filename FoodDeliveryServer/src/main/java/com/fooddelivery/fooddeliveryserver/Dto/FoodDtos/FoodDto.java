package com.fooddelivery.fooddeliveryserver.Dto.FoodDtos;

import com.fooddelivery.fooddeliveryserver.models.enums.FoodType;
import lombok.Data;

@Data
public class FoodDto {
    private Long id;
    private String name;
    private String description;
    private String ingredients;
    private int price;
    private FoodType foodType;
}
