package com.example.snikerin.controllers.requests;

import javax.validation.constraints.DecimalMin;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

import com.example.snikerin.models.Product;
import jakarta.validation.constraints.NotBlank;

public record ProductRequest(
        @NotBlank(message = "O nome é obrigatório")
        String name,

        @NotNull(message = "O preço é obrigatório")
        @DecimalMin(value = "0.0", inclusive = false, message = "O preço deve ser maior que 0")
        BigDecimal price,

        String description,

        @NotBlank(message = "A categoria é obrigatório")
        String category,

        @NotBlank(message = "A marca é obrigatório")
        String brand,

        Boolean onSale,

        @DecimalMin(value = "0.0", inclusive = false, message = "O preço deve ser maior que 0")
        BigDecimal salePrice
) {
    public Product toEntity() {
        return new Product(
                null,
                name,
                price,
                description,
                category,
                brand,
                onSale,
                salePrice,
                null
        );
    }
}
