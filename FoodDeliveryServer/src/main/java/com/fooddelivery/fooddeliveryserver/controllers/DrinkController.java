package com.fooddelivery.fooddeliveryserver.controllers;

import com.fooddelivery.fooddeliveryserver.Dto.DrinkDtos.DrinkDto;
import com.fooddelivery.fooddeliveryserver.models.Drink;
import com.fooddelivery.fooddeliveryserver.services.DrinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class DrinkController {

    private final DrinkService drinkService;

    @Autowired
    public DrinkController(DrinkService drinkService) {
        this.drinkService = drinkService;
    }

    @GetMapping("drink")
    public ResponseEntity<List<DrinkDto>> getDrinks() {
        return new ResponseEntity<>(drinkService.getAllDrink(), HttpStatus.OK);
    }

    @GetMapping("drink/{id}")
    public ResponseEntity<DrinkDto> getDrinkById(@PathVariable Long id) {
        return new ResponseEntity<>(drinkService.getDrinkById(id), HttpStatus.OK);
    }

    @PostMapping("drink/create")
    public ResponseEntity<DrinkDto> createDrink(@RequestBody DrinkDto dto) {
        return new ResponseEntity<>(drinkService.createDrink(dto), HttpStatus.CREATED);
    }

    @PutMapping("drink/{id}/update")
    public ResponseEntity<DrinkDto> updateDrink(@RequestBody DrinkDto dto, @PathVariable Long id) {
        return new ResponseEntity<>(drinkService.updateDrink(dto, id), HttpStatus.OK);
    }

    @DeleteMapping("drink/{id}/delete")
    public ResponseEntity<String> deleteDrink(@PathVariable Long id) {
        drinkService.deleteDrink(id);
        return new ResponseEntity<>("Drink deleted", HttpStatus.OK);
    }
}
