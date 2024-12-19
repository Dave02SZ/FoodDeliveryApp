package com.fooddelivery.fooddeliveryserver.services;

import com.fooddelivery.fooddeliveryserver.Dto.SauceDtos.SauceDto;

import java.util.List;

public interface SauceService {
    SauceDto createSauce(Long foodId, SauceDto sauceDto);
    List<SauceDto> getSauceByFoodId(Long foodId);
    SauceDto getSauceById(Long sauceId,Long foodId);
    SauceDto updateSauce(Long sauceId, Long foodId, SauceDto sauceDto);
    void deleteSauce(Long sauceId, Long foodId);
}
