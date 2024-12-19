package com.fooddelivery.fooddeliveryserver.repository;

import com.fooddelivery.fooddeliveryserver.models.Order;
import org.springframework.data.repository.CrudRepository;


public interface ServiceReposiotry extends CrudRepository<Order,Integer> {
}
