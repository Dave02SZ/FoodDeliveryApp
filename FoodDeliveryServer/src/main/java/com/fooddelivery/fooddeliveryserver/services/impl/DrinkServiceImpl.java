package com.fooddelivery.fooddeliveryserver.services.impl;

import com.fooddelivery.fooddeliveryserver.Dto.DrinkDtos.DrinkDto;
import com.fooddelivery.fooddeliveryserver.exceptions.DrinkNotFoundException;
import com.fooddelivery.fooddeliveryserver.models.Drink;
import com.fooddelivery.fooddeliveryserver.repository.DrinkRepository;
import com.fooddelivery.fooddeliveryserver.services.DrinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DrinkServiceImpl implements DrinkService {
    private DrinkRepository drinkRepository;

    @Autowired
    public DrinkServiceImpl(DrinkRepository drinkRepository) {this.drinkRepository = drinkRepository;}

    @Override
    public DrinkDto createDrink(DrinkDto drinkDto) {
        Drink drink = new Drink();
        drink.setName(drinkDto.getName());
        drink.setDescription(drinkDto.getDescription());
        drink.setPrice(drinkDto.getPrice());
        drink.setDrinkType(drinkDto.getDrinkType());

        Drink newDrink = drinkRepository.save(drink);

        DrinkDto drinkResponse = new DrinkDto();
        drinkResponse.setName(newDrink.getName());
        drinkResponse.setDescription(newDrink.getDescription());
        drinkResponse.setPrice(newDrink.getPrice());
        drinkResponse.setDrinkType(newDrink.getDrinkType());

        return drinkResponse;
    }

    @Override
    public List<DrinkDto> getAllDrink() {
        List<Drink> drinks = drinkRepository.findAll();
        return drinks.stream().map(d -> mapToDto(d)).collect(Collectors.toList());
    }

    @Override
    public DrinkDto getDrinkById(Long id) {
        Drink drink = drinkRepository.findById(id).orElseThrow(() -> new DrinkNotFoundException("Drink not found"));
        return mapToDto(drink);
    }

    @Override
    public DrinkDto updateDrink(DrinkDto drinkDto, Long id) {
        Drink drink = drinkRepository.findById(id).orElseThrow(() -> new DrinkNotFoundException("Drink not found"));

        drink.setName(drinkDto.getName());
        drink.setDescription(drinkDto.getDescription());
        drink.setPrice(drinkDto.getPrice());
        drink.setDrinkType(drinkDto.getDrinkType());

        Drink updatedDrink = drinkRepository.save(drink);

        return mapToDto(updatedDrink);
    }

    @Override
    public void deleteDrink(Long id) {
        Drink drink = drinkRepository.findById(id).orElseThrow(() -> new DrinkNotFoundException("Drink not found"));
        drinkRepository.delete(drink);
    }

    private DrinkDto mapToDto(Drink drink) {
        DrinkDto drinkDto = new DrinkDto();
        drinkDto.setId(drink.getId());
        drinkDto.setName(drink.getName());
        drinkDto.setDescription(drink.getDescription());
        drinkDto.setPrice(drink.getPrice());
        drinkDto.setDrinkType(drink.getDrinkType());

        return drinkDto;
    }
}
