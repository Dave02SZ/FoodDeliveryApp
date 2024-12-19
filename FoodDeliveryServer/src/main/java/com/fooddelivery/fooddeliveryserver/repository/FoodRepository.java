package com.fooddelivery.fooddeliveryserver.repository;

import com.fooddelivery.fooddeliveryserver.models.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {

}
