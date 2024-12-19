package com.fooddelivery.fooddeliveryserver.repository;

import com.fooddelivery.fooddeliveryserver.models.Drink;
import org.springframework.data.repository.CrudRepository;

public interface DrinkRepository extends CrudRepository<Drink, Long> {
}
