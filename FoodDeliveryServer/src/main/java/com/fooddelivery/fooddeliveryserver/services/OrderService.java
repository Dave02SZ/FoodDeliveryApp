package com.fooddelivery.fooddeliveryserver.services;

import com.fooddelivery.fooddeliveryserver.Dto.OrderDtos.OrderDto;
import com.fooddelivery.fooddeliveryserver.models.enums.Status;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    OrderDto createOrder(OrderDto orderDto);
    OrderDto updateOrderStatus(Long id, Status newStatus);
    OrderDto updateOrder(Long id, OrderDto orderDto);
    Optional<OrderDto> getOrderById(Long id);
    List<OrderDto> getAllOrders();
    void deleteOrder(Long id);
}
