package com.fooddelivery.fooddeliveryserver.controllers;


import com.fooddelivery.fooddeliveryserver.Dto.SauceDtos.SauceDto;
import com.fooddelivery.fooddeliveryserver.models.Sauce;
import com.fooddelivery.fooddeliveryserver.services.SauceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class SauceController {

    private SauceService sauceService;

    @Autowired
    public SauceController(SauceService sauceService) {
        this.sauceService = sauceService;
    }

    @PostMapping("food/{foodId}/sauce/create")
    public ResponseEntity<SauceDto> sauce(@PathVariable("foodId") Long foodId, @RequestBody SauceDto sauceDto) {
        return new ResponseEntity<>(sauceService.createSauce(foodId, sauceDto), HttpStatus.CREATED);
    }

    @GetMapping("food/{foodId}/sauces")
    public List<SauceDto> getSauce(@PathVariable("foodId") Long foodId) {
        return sauceService.getSauceByFoodId(foodId);
    }

    @GetMapping("food/{foodId}/sauces/{sauceId}")
    public ResponseEntity<SauceDto> getSauceById(@PathVariable(value = "sauceId") Long id, @PathVariable(value = "foodId") Long foodId) {
        SauceDto sauceDto = sauceService.getSauceById(id, foodId);
        return new ResponseEntity<>(sauceDto, HttpStatus.OK);
    }

    @PutMapping("food/{foodId}/sauces/{sauceId}")
    public ResponseEntity<SauceDto> updateSauce(@PathVariable(value = "sauceId") Long id, @PathVariable(value = "foodId") Long foodId, @RequestBody SauceDto sauceDto) {
        SauceDto updatedSauce = sauceService.updateSauce(id, foodId, sauceDto);
        return new ResponseEntity<>(updatedSauce, HttpStatus.OK);
    }

    @DeleteMapping("food/{foodId}/sauces/{sauceId}")
    public ResponseEntity<SauceDto> deleteSauce(@PathVariable(value = "sauceId") Long id, @PathVariable(value = "foodId") Long foodId){
        sauceService.deleteSauce(id, foodId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
