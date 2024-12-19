package com.fooddelivery.fooddeliveryserver.repository;

import com.fooddelivery.fooddeliveryserver.models.Drink;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DrinkRepository extends CrudRepository<Drink, Long> {
    List<Sauce> findByFoodId(Long foodId);
}
