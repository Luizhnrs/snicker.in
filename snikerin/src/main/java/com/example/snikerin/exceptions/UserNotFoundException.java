package com.example.snikerin.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(){
        super("Usuário não encontrado!");
    }
}
