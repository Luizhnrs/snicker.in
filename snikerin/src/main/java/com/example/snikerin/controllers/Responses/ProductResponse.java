package com.example.snikerin.controllers.Responses;

import java.math.BigDecimal;
import java.util.UUID;

public record ProductResponse(
        UUID id,
        String productName,
        BigDecimal productPrice,
        String productDescription,
        String productImages,
        String productCategory,
        String productBrand,
        Boolean productOnSale,
        BigDecimal productSalePrice
) {
}
