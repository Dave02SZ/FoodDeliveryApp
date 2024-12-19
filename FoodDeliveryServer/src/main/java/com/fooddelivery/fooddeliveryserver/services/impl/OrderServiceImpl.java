package com.fooddelivery.fooddeliveryserver.services.impl;

import com.fooddelivery.fooddeliveryserver.Dto.OrderDtos.OrderDto;
import com.fooddelivery.fooddeliveryserver.Dto.OrderItemDtos.OrderItemDto;
import com.fooddelivery.fooddeliveryserver.exceptions.OrderNotFoundException;
import com.fooddelivery.fooddeliveryserver.models.Drink;
import com.fooddelivery.fooddeliveryserver.models.Food;
import com.fooddelivery.fooddeliveryserver.models.Order;
import com.fooddelivery.fooddeliveryserver.models.OrderItem;
import com.fooddelivery.fooddeliveryserver.repository.OrderRepository;
import com.fooddelivery.fooddeliveryserver.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;


    @Override
    public OrderDto createOrder(OrderDto orderDto) {
        Order order = new Order();
        order.setStatus(orderDto.getStatus());

        order.setOrderItems(mapToEntity(orderDto));

        orderRepository.save(order);

        return mapToDto(order);
    }

    @Override
    public OrderDto updateOrder(Long id, OrderDto orderDto) {
        Optional<Order> existingOrder = orderRepository.findById(id);
        if (existingOrder.isPresent()) {
            Order order = existingOrder.get();
            order.setStatus(orderDto.getStatus());
            order.setOrderItems(mapToEntity(orderDto));

            orderRepository.save(order);
            return mapToDto(order);
        }
        throw new OrderNotFoundException("Order not found ");
    }

    @Override
    public Optional<OrderDto> getOrderById(Long id) {
        Optional<Order> order = orderRepository.findById(id);
        return order.map(this::mapToDto);
    }

    @Override
    public List<OrderDto> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteOrder(Long id) {
        Optional<Order> order = orderRepository.findById(id);
        if (order.isPresent()) {
            orderRepository.delete(order.get()); // töröljük a rendelést
        } else {
            throw new OrderNotFoundException("Order not found");
        }
    }


    private OrderDto mapToDto(Order order) {
        OrderDto orderDto = new OrderDto();
        orderDto.setId(order.getId());
        orderDto.setStatus(order.getStatus());

        List<OrderItemDto> orderItemDtos = mapToOrderItemDtoList(order.getOrderItems());

        orderDto.setOrderItems(orderItemDtos);

        return orderDto;
    }

    private List<OrderItem> mapToEntity(OrderDto orderDto) {
        return orderDto.getOrderItems().stream()
                .map(orderItemDto -> {
                    OrderItem orderItem = new OrderItem();

                    // Ha Food ID van, akkor hozzárendeljük a Food objektumot
                    if (orderItemDto.getFoodId() != null) {
                        Food food = new Food();
                        food.setId(orderItemDto.getFoodId());
                        orderItem.setFood(food);
                    }

                    // Ha Drink ID van, akkor hozzárendeljük a Drink objektumot
                    if (orderItemDto.getDrinkId() != null) {
                        Drink drink = new Drink();
                        drink.setId(orderItemDto.getDrinkId());
                        orderItem.setDrink(drink);
                    }

                    return orderItem;
                })
                .collect(Collectors.toList());
    }

    public static List<OrderItemDto> mapToOrderItemDtoList(List<OrderItem> orderItems) {
        return orderItems.stream()
                .map(orderItem -> {
                    OrderItemDto orderItemDto = new OrderItemDto();
                    if (orderItem.getFood() != null) {
                        orderItemDto.setFoodId(orderItem.getFood().getId());
                    }
                    if (orderItem.getDrink() != null) {
                        orderItemDto.setDrinkId(orderItem.getDrink().getId());
                    }
                    return orderItemDto;
                })
                .collect(Collectors.toList());
    }

}
