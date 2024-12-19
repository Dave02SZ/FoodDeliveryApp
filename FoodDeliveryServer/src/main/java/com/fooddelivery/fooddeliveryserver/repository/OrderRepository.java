package com.fooddelivery.fooddeliveryserver.repository;
import com.fooddelivery.fooddeliveryserver.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface OrderRepository extends JpaRepository<Order,Long> {

}
