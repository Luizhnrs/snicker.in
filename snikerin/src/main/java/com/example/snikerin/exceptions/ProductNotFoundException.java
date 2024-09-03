package com.example.snikerin.exceptions;

public class ProductNotFoundException extends RuntimeException{
    public ProductNotFoundException(){
        super("Produto não encontrado!");
    }
}
