package com.fooddelivery.fooddeliveryserver.services.impl;

import com.fooddelivery.fooddeliveryserver.Dto.FoodDtos.FoodDto;
import com.fooddelivery.fooddeliveryserver.Dto.SauceDtos.SauceDto;
import com.fooddelivery.fooddeliveryserver.exceptions.FoodNotFoundException;
import com.fooddelivery.fooddeliveryserver.exceptions.SauceNotFoundException;
import com.fooddelivery.fooddeliveryserver.models.Food;
import com.fooddelivery.fooddeliveryserver.models.Sauce;
import com.fooddelivery.fooddeliveryserver.repository.FoodRepository;
import com.fooddelivery.fooddeliveryserver.repository.SauceReposiotry;
import com.fooddelivery.fooddeliveryserver.services.SauceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SauceServiceImpl implements SauceService {
    private SauceReposiotry sauceReposiotry;
    private FoodRepository foodRepository;

    @Autowired
    public SauceServiceImpl(SauceReposiotry sauceReposiotry, FoodRepository foodRepository) {
        this.sauceReposiotry = sauceReposiotry;
        this.foodRepository = foodRepository;
    }

    @Override
    public SauceDto createSauce(Long foodId, SauceDto sauceDto) {
        Sauce sauce = mapToEntity(sauceDto);
        Food food = foodRepository.findById(foodId).orElseThrow(() -> new FoodNotFoundException("Food not found"));
        sauce.setFood(food);
        Sauce newSauce = sauceReposiotry.save(sauce);
        return mapToDto(newSauce);
    }

    @Override
    public List<SauceDto> getSauceByFoodId(Long foodId) {
        List<Sauce> sauces = sauceReposiotry.findByFoodId(foodId);
        return sauces.stream().map(this::mapToDto).toList();
    }

    @Override
    public SauceDto getSauceById(Long sauceId, Long foodId) {
        Food food = foodRepository.findById(foodId).orElseThrow(() -> new FoodNotFoundException("Food not found"));
        Sauce sauce = sauceReposiotry.findById(sauceId).orElseThrow(() -> new SauceNotFoundException("Sauce not found"));

        if(!sauce.getFood().getId().equals(foodId)){
            throw new SauceNotFoundException("Sauce not found under this food");
        }

        return mapToDto(sauce);
    }

    @Override
    public SauceDto updateSauce(Long sauceId, Long foodId, SauceDto sauceDto) {
        Food food = foodRepository.findById(foodId).orElseThrow(() -> new FoodNotFoundException("Food not found"));
        Sauce sauce = sauceReposiotry.findById(sauceId).orElseThrow(() -> new SauceNotFoundException("Sauce not found"));
        if(!sauce.getFood().getId().equals(foodId)){
            throw new SauceNotFoundException("Sauce not found under this food");
        }
        sauce.setName(sauceDto.getName());

        Sauce newSauce = sauceReposiotry.save(sauce);
        return mapToDto(newSauce);
    }

    @Override
    public void deleteSauce(Long sauceId, Long foodId) {
        Food food = foodRepository.findById(foodId).orElseThrow(() -> new FoodNotFoundException("Food not found"));
        Sauce sauce = sauceReposiotry.findById(sauceId).orElseThrow(() -> new SauceNotFoundException("Sauce not found"));
        if(!sauce.getFood().getId().equals(foodId)){
            throw new SauceNotFoundException("Sauce not found under this food");
        }
        sauceReposiotry.delete(sauce);
    }


    private SauceDto mapToDto(Sauce sauce){
        SauceDto sauceDto = new SauceDto();
        sauceDto.setName(sauce.getName());
        sauceDto.setId(sauce.getId());

        return sauceDto;
    }

    private Sauce mapToEntity(SauceDto sauceDto){
        Sauce sauce = new Sauce();
        sauce.setId(sauceDto.getId());
        sauce.setName(sauceDto.getName());
        return sauce;
    }

}
