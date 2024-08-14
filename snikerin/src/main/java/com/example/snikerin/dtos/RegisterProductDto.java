package com.example.snikerin.dtos;

import com.example.snikerin.models.Products;
import org.antlr.v4.runtime.misc.NotNull;

import java.math.BigDecimal;

public record RegisterProductDto(
        @NotNull String productName,
        @NotNull BigDecimal productPrice,
        String productDescription,
        @NotNull boolean productStatus,
        @NotNull String productImage,
        @NotNull String productCategory,
        @NotNull String productBrand,
        boolean productOnSale,
        BigDecimal productSalePrice
) {
    public Products toProducts() {
        return new Products(
        productName,
        productDescription,
        productPrice,
        productStatus,
        productImage,
        productCategory,
        productBrand,
        productOnSale,
        productSalePrice
        );
    }
}
