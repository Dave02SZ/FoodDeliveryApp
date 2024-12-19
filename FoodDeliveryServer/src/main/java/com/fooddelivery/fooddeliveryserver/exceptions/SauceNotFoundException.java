package com.fooddelivery.fooddeliveryserver.exceptions;

public class SauceNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1;

    public SauceNotFoundException(String message) {
        super(message);
    }
}
