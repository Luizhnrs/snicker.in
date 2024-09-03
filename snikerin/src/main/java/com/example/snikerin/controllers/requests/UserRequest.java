package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.User;

public record UserRequest(
       String firstName,
       String lastName,
       String cpfCnpj,
       String email,
       String password
) {
    public User toEntity(){
        return new User(firstName, lastName, cpfCnpj, email, password);
    }
}
