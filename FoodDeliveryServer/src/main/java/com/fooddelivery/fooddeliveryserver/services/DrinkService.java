package com.fooddelivery.fooddeliveryserver.services;

import com.fooddelivery.fooddeliveryserver.Dto.DrinkDtos.DrinkDto;

import java.util.List;

public interface DrinkService {
    DrinkDto createDrink(DrinkDto drinkDto);
    List<DrinkDto> getAllDrink();
    DrinkDto getDrinkById(Long id);
    DrinkDto updateDrink(DrinkDto drinkDto, Long id);
    void deleteDrink(Long id);
}
