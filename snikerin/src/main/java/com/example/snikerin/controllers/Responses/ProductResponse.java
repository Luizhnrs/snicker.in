package com.example.snikerin.controllers.Responses;

import com.example.snikerin.models.ProductImage;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public record ProductResponse(
        UUID id,
        String productName,
        BigDecimal productPrice,
        String productDescription,
        List<ProductImageResponse> productImages,
        String productCategory,
        String productBrand,
        Boolean productOnSale,
        BigDecimal productSalePrice
) {
}
