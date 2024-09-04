package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.Address;
import jakarta.validation.constraints.NotBlank;

public record AddressRequest(
        @NotBlank String street,
        @NotBlank String number,
        String complement,
        @NotBlank String neighborhood,
        @NotBlank String city,
        @NotBlank String state,
        @NotBlank String cep
) {
    public Address toEntity() {
        return new Address(
                null,
                street,
                number,
                complement,
                neighborhood,
                city,
                state,
                cep,
                null
        );
    }
}
