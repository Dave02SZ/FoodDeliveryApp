package com.fooddelivery.fooddeliveryserver.services;

import com.fooddelivery.fooddeliveryserver.Dto.FoodDto;

import java.util.List;


public interface FoodService {
    FoodDto createFood(FoodDto foodDto);
    List<FoodDto> getAllFood();
    FoodDto getFoodById(Long id);
    FoodDto updateFood(FoodDto foodDto, Long id);
    void deleteFood(Long id);
}
