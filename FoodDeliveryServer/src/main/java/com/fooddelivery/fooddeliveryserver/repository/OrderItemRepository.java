package com.fooddelivery.fooddeliveryserver.repository;

import com.fooddelivery.fooddeliveryserver.models.Order;
import com.fooddelivery.fooddeliveryserver.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem,Integer> {
    List<Order> findByOrderId(Long Order);
}
