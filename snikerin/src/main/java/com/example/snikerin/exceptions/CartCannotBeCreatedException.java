package com.example.snikerin.exceptions;

public class CartCannotBeCreatedException extends Exception{
    public CartCannotBeCreatedException(){
        super("Cart cannot be created or not exists");
    }
}
