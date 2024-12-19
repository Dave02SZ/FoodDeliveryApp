package com.fooddelivery.fooddeliveryserver.services;

import com.fooddelivery.fooddeliveryserver.Dto.OrderItemDtos.OrderItemDto;

import java.util.List;

public interface OrderItemSerivce {
    OrderItemDto createOrder(OrderItemDto orderItemDto);
    List<OrderItemDto> getOrderItems();
    OrderItemDto getOrderItem(Long id);
    OrderItemDto updateOrderItem(OrderItemDto orderItemDto, Long id);
    void deleteOrderItem(Long id);
}
