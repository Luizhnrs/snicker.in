package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.Product;
import java.math.BigDecimal;

public record ProductRequest(
        String name,
        BigDecimal price,
        String description,
        String category,
        String brand,
        Boolean onSale,
        BigDecimal salePrice
) {
    public Product toEntity() {
        return new Product(
                name,
                price,
                description,
                category,
                brand,
                onSale,
                salePrice
        );
    }
}
