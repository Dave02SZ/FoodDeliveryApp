package com.fooddelivery.fooddeliveryserver.api.controllers;

import com.fooddelivery.fooddeliveryserver.api.models.Food;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
public class FoodController {


    @GetMapping("food")
    public ResponseEntity<List<Food>> getFood() {
        List<Food> foods = new ArrayList<Food>();
        foods.add(new Food(1,"Pizza",false));
        foods.add(new Food(2,"Hot dog", true));
        foods.add(new Food(3,"Hamburger", true));
        foods.add(new Food(4,"French fries", true));
        foods.add(new Food(5,"Ice cream", false));

        return ResponseEntity.ok(foods);
    }

    @GetMapping("food/{id}")
    public Food getFoodById(@PathVariable int id) {
        return new Food(id, "Hamburger", true);
    }

    @PostMapping("food/create")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Food> createFood(@RequestBody Food food) {
        System.out.println(food.getId());
        System.out.println(food.getName());
        return new ResponseEntity<>(food,HttpStatus.CREATED);
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
