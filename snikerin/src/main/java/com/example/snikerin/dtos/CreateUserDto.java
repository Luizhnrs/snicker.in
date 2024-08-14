package com.example.snikerin.dtos;

import com.example.snikerin.models.User;
import org.antlr.v4.runtime.misc.NotNull;

public record CreateUserDto(
        @NotNull String firstName,
        @NotNull String lastName,
        @NotNull String email,
        @NotNull String password,
        @NotNull String cpfCnpj
        ) {
    public User toUser() {
        return new User(
                firstName,
                lastName,
                email,
                password,
                cpfCnpj
        );
    }
}
