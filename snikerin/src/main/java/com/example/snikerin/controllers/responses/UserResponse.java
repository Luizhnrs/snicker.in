package com.example.snikerin.controllers.responses;

import java.util.UUID;

public record UserResponse(
        UUID id,
        String firstName,
        String lastName,
        String cpf,
        String email
) {
}
