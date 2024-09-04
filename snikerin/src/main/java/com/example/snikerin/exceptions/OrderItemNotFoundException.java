package com.example.snikerin.exceptions;

public class OrderItemNotFoundException extends RuntimeException {
    public OrderItemNotFoundException() {
        super("Item do pedido não encontrado!");
    }
}
