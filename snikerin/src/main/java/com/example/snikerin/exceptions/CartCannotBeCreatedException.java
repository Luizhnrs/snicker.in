package com.example.snikerin.exceptions;

public class CartCannotBeCreatedException extends RuntimeException{
    public CartCannotBeCreatedException(){
        super("Cart cannot be created or not exists");
    }
}
