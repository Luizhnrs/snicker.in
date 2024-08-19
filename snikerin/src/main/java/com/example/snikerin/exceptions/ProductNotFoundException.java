package com.example.snikerin.exceptions;

public class ProductNotFoundException extends Exception{
    public ProductNotFoundException(){
        super("Product not found or out of stock");
    }
}
