package com.fooddelivery.fooddeliveryserver.repository;

import com.fooddelivery.fooddeliveryserver.models.Sauce;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SauceReposiotry extends JpaRepository<Sauce, Long> {
    List<Sauce> findByFoodId(Long foodId);
}
