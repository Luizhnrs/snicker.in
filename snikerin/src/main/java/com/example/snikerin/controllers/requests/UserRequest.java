package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.User;

public record UserRequest(
        String firstName,
        String lastName,
        String cpf,
        String email,
        String password
) {
    public User toEntity(){
        return new User(firstName, lastName, cpf, email, password);
    }
}
