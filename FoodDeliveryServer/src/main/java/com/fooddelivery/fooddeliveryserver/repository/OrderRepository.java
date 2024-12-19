package com.fooddelivery.fooddeliveryserver.repository;

import com.fooddelivery.fooddeliveryserver.models.Order;
import com.fooddelivery.fooddeliveryserver.models.OrderItem;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface OrderRepository extends CrudRepository<Order,Integer> {

}
