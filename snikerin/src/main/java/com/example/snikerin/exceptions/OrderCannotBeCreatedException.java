package com.example.snikerin.exceptions;

public class OrderCannotBeCreatedException extends RuntimeException{
    public OrderCannotBeCreatedException(){
        super("Order cannot be created");
    }
}
