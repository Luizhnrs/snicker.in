package com.example.snikerin.controllers.Requests;

import com.example.snikerin.models.User;
import lombok.experimental.NonFinal;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.UUID;

public record UserRequest(
       @NotNull String firstName,
       @NotNull String lastName,
       @NotNull String cpfCnpj,
       @NotNull String email,
       @NotNull String password
) {
    public User toEntity(){
        return new User(firstName, lastName, cpfCnpj, email, password);
    }
}
