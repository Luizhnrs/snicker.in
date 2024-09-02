package com.example.snikerin.controllers.Requests;

import com.example.snikerin.models.Products;
import java.math.BigDecimal;

public record ProductRequest(
        String productName,
        BigDecimal productPrice,
        String productDescription,
        String productCategory,
        String productBrand,
        Boolean productOnSale,
        BigDecimal productSalePrice
) {
    public Products toEntity(){
        return new Products(
                productName,
                productPrice,
                productDescription,
                productCategory,
                productBrand,
                productOnSale,
                productSalePrice
        );
    }
}
