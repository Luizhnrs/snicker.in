package com.example.snikerin.exceptions;

public class CartItemNotFoundException extends RuntimeException {
    public CartItemNotFoundException() {
        super("Item do carrinho não encontrado!");
    }
}
