package com.fooddelivery.fooddeliveryserver.controllers;

import com.fooddelivery.fooddeliveryserver.Dto.FoodDto;
import com.fooddelivery.fooddeliveryserver.models.Food;
import com.fooddelivery.fooddeliveryserver.services.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
public class FoodController {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping("food")
    public ResponseEntity<List<FoodDto>> getFood() {
        return new ResponseEntity<>(foodService.getAllFood(), HttpStatus.OK);
    }

    @GetMapping("food/{id}")
    public Food getFoodById(@PathVariable int id) {
        return new Food(id, "Hamburger", true);
    }

    @PostMapping("food/create")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<FoodDto> createFood(@RequestBody FoodDto foodDto) {
        return new ResponseEntity<>(foodService.createFood(foodDto), HttpStatus.CREATED);
    }

    @PutMapping("food/{id}/update")
    public ResponseEntity<Food> updateFood(@PathVariable int id, @RequestBody Food food) {
        System.out.println(food.getName());
        System.out.println(food.getId());
        return new ResponseEntity<>(food,HttpStatus.OK);
    }

    @DeleteMapping("food/{id}/delete")
    public ResponseEntity<Food> deleteFood(@PathVariable int id) {
        System.out.println(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
