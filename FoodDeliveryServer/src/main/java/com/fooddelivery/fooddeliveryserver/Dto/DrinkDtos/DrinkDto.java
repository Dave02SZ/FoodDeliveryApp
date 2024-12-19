package com.fooddelivery.fooddeliveryserver.Dto.DrinkDtos;

import com.fooddelivery.fooddeliveryserver.models.enums.DrinkType;
import lombok.Data;

@Data
public class DrinkDto {
    private Long id;
    private String name;
    private String description;
    private int price;
    private DrinkType drinkType;
}
