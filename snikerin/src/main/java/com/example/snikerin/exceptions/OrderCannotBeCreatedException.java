package com.example.snikerin.exceptions;

public class OrderCannotBeCreatedException extends Exception{
    public OrderCannotBeCreatedException(){
        super("Order cannot be created");
    }
}
