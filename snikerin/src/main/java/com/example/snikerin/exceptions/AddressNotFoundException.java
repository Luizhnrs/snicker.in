package com.example.snikerin.exceptions;

public class AddressNotFoundException extends RuntimeException {
    public AddressNotFoundException() {
        super("Endereço não encontrado!");
    }
}
