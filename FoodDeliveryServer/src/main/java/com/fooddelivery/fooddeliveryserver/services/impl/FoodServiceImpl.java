package com.fooddelivery.fooddeliveryserver.services.impl;

import com.fooddelivery.fooddeliveryserver.Dto.FoodDtos.FoodDto;
import com.fooddelivery.fooddeliveryserver.exceptions.FoodNotFoundException;
import com.fooddelivery.fooddeliveryserver.models.Food;
import com.fooddelivery.fooddeliveryserver.repository.FoodRepository;
import com.fooddelivery.fooddeliveryserver.services.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {
    private FoodRepository foodRepository;

    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @Override
    public FoodDto createFood(FoodDto foodDto) {
        Food food = new Food();
        food.setName(foodDto.getName());
        food.setHasSauce(foodDto.isHasSauce());

        Food newFood = foodRepository.save(food);

        FoodDto foodResponse = new FoodDto();
        foodResponse.setId(newFood.getId());
        foodResponse.setName(newFood.getName());
        foodResponse.setHasSauce(newFood.isHasSauce());
        return foodResponse;
    }

    @Override
    public List<FoodDto> getAllFood() {
        List<Food> foods = foodRepository.findAll();
        return foods.stream().map(f -> mapToDto(f)).collect(Collectors.toList());
    }

    @Override
    public FoodDto getFoodById(Long id) {
        Food food = foodRepository.findById(id).orElseThrow(() -> new FoodNotFoundException("Food could not be found"));
        return mapToDto(food);
    }

    @Override
    public FoodDto updateFood(FoodDto foodDto, Long id) {
        Food food = foodRepository.findById(id).orElseThrow(() -> new FoodNotFoundException("Food not found"));

        food.setName(foodDto.getName());
        food.setHasSauce(foodDto.isHasSauce());
        Food updatedFood = foodRepository.save(food);

        return mapToDto(updatedFood);
    }

    @Override
    public void deleteFood(Long id) {
        Food food = foodRepository.findById(id).orElseThrow(() -> new FoodNotFoundException("Food not found"));
        foodRepository.delete(food);
    }

    private FoodDto mapToDto(Food food){
        FoodDto foodDto = new FoodDto();
        foodDto.setId(food.getId());
        foodDto.setName(food.getName());
        foodDto.setHasSauce(food.isHasSauce());

        return foodDto;
    }

    private Food mapToEntity(FoodDto foodDto){
        Food food = new Food();
        food.setId(foodDto.getId());
        food.setName(foodDto.getName());
        food.setHasSauce(foodDto.isHasSauce());
        return food;
    }
}
