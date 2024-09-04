package com.example.snikerin.controllers.responses;

import java.util.UUID;

public record AddressResponse(
        UUID id,
        String street,
        String number,
        String complement,
        String neighborhood,
        String city,
        String state,
        String cep,
        UUID userId
) {
}
