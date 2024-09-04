package com.example.snikerin.exceptions;

public class CartNotFoundException extends RuntimeException{
    public CartNotFoundException(){
        super("Carrinho não encontrado!");
    }
}
