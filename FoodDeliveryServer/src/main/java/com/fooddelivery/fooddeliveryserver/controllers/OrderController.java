package com.fooddelivery.fooddeliveryserver.controllers;

import com.fooddelivery.fooddeliveryserver.Dto.OrderDtos.OrderDto;
import com.fooddelivery.fooddeliveryserver.models.enums.Status;
import com.fooddelivery.fooddeliveryserver.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) { this.orderService = orderService; }

    @GetMapping("order")
    public ResponseEntity<List<OrderDto>> getOrder() {
        return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK);
    }

    @GetMapping("order/{id}")
    public ResponseEntity<Optional<OrderDto>> getOrderById(@PathVariable Long id) {
        return ResponseEntity.ok(orderService.getOrderById(id));
    }

    @PostMapping("order/create")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<OrderDto> createOrder(@RequestBody OrderDto orderDto) {
        return new ResponseEntity<>(orderService.createOrder(orderDto), HttpStatus.CREATED);
    }

    @PutMapping("order/{id}/update")
    public ResponseEntity<OrderDto> updateOrder(@PathVariable("id") Long id, @RequestBody OrderDto orderDto) {
        OrderDto response = orderService.updateOrder(id, orderDto);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("order/{id}/delete")
    public ResponseEntity<String> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return new ResponseEntity<>("Order deleted", HttpStatus.OK);
    }

    @PutMapping("order/{id}/update/status")
    public ResponseEntity<OrderDto> updateStatus(@PathVariable("id") Long id, @RequestBody Status status) {
        OrderDto response = orderService.updateOrderStatus(id, status);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
