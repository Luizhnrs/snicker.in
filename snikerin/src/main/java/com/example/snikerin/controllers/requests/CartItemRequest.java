package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.CartItem;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record CartItemRequest(
        @NotNull(message = "A quantidade é obrigatória")
        @Min(value = 1, message = "A quantidade tem que ser mais que zero")
        Integer quantity
) {
    public CartItem toEntity() {
        return new CartItem(null, quantity, null, null);
    }
}
