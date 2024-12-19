package com.fooddelivery.fooddeliveryserver.controllers;

import com.fooddelivery.fooddeliveryserver.Dto.FoodDtos.FoodDto;
import com.fooddelivery.fooddeliveryserver.services.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<FoodDto> getFoodById(@PathVariable Long id) {
        return ResponseEntity.ok(foodService.getFoodById(id));
    }

    @PostMapping("food/create")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<FoodDto> createFood(@RequestBody FoodDto foodDto) {
        return new ResponseEntity<>(foodService.createFood(foodDto), HttpStatus.CREATED);
    }

    @PutMapping("food/{id}/update")
    public ResponseEntity<FoodDto> updateFood(@PathVariable("id") Long id, @RequestBody FoodDto foodDto) {
        FoodDto response = foodService.updateFood(foodDto, id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("food/{id}/delete")
    public ResponseEntity<String> deleteFood(@PathVariable Long id) {
        foodService.deleteFood(id);
        return new ResponseEntity<>("Food deleted", HttpStatus.OK);
    }
}
