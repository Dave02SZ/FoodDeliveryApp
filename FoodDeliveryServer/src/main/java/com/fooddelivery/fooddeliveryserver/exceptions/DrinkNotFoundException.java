package com.fooddelivery.fooddeliveryserver.exceptions;

public class DrinkNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1;

    public DrinkNotFoundException(String message){
        super(message);
    }
}
