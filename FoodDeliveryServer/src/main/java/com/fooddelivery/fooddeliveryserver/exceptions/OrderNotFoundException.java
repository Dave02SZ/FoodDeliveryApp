package com.fooddelivery.fooddeliveryserver.exceptions;

public class OrderNotFoundException extends RuntimeException {
    public OrderNotFoundException(String message){
        super(message);
    }
}
