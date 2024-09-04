package com.example.snikerin.exceptions;

public class OrderNotFoundException extends RuntimeException {
    public OrderNotFoundException() {
        super("Pedido não encontrado!");
    }
}
