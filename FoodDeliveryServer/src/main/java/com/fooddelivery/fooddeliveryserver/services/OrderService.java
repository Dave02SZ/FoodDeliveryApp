package com.fooddelivery.fooddeliveryserver.services;

import com.fooddelivery.fooddeliveryserver.Dto.OrderDtos.OrderDto;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    OrderDto createOrder(OrderDto orderDto);


    OrderDto updateOrder(Long id, OrderDto orderDto);
    Optional<OrderDto> getOrderById(Long id);
    List<OrderDto> getAllOrders();
    void deleteOrder(Long id);
}
