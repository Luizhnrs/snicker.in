package com.example.snikerin.dtos;

import com.example.snikerin.models.Orders;
import org.antlr.v4.runtime.misc.NotNull;

import java.math.BigDecimal;

public record OrderCreateDto(
        @NotNull String firstName,
        @NotNull String lastName,
        @NotNull String email,
        @NotNull String phone,
        @NotNull String address,
        @NotNull String city,
        String reference,
        @NotNull String state,
        @NotNull String cep,
        @NotNull String country,
        @NotNull BigDecimal amount,
        String notes
) {
    public Orders toOrders(){
        return new Orders(
                firstName,
                lastName,
                email,
                phone,
                address,
                city,
                reference,
                state,
                cep,
                country,
                amount,
                notes

        );
    }
}
