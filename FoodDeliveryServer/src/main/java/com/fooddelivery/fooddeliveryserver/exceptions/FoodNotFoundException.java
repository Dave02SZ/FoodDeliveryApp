package com.fooddelivery.fooddeliveryserver.exceptions;

public class FoodNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1;

    public FoodNotFoundException(String message){
        super(message);
    }
}
