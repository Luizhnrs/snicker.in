package com.example.snikerin.controllers.responses;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public record ProductResponse(
        UUID id,
        String name,
        BigDecimal price,
        String description,
        List<ProductImageResponse> images,
        String category,
        String sizes,
        String brand,
        Boolean onSale,
        BigDecimal salePrice
) {
}
