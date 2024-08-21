package com.example.snikerin.controllers.Responses;

import java.util.UUID;

public record UserResponse(
        UUID id,
        String firstName,
        String lastName,
        String cpfCnpj,
        String email,
        String password
) {
}
