package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.OrderItem;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

import javax.validation.constraints.DecimalMin;
import java.math.BigDecimal;

public record OrderItemRequest(
        @NotNull(message = "A quantidade é obrigatória")
        @Min(value = 1, message = "A quantidade tem que ser mais que zero")
        int quantity,
        @NotNull(message = "O preço é obrigatório")
        @DecimalMin(value = "0.0", inclusive = false, message = "O preço deve ser maior que 0")
        BigDecimal price) {
    public OrderItem toEntity() {
        return new OrderItem(null, quantity, price, null, null);
    }
}
