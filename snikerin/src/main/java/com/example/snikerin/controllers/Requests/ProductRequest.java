package com.example.snikerin.controllers.Requests;

import com.example.snikerin.models.Products;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.NotFound;

import java.math.BigDecimal;

public record ProductRequest(
      @NotNull String productName,
      @NotNull BigDecimal productPrice,
      @NotNull String productDescription,
      @NotNull Boolean productStatus,
      String productImages,
      @NotNull String productCategory,
      @NotNull String productBrand,
      @NotNull Boolean productOnSale,
      BigDecimal productSalePrice
) {
    public Products toEntity(){
        return new Products(productName, productPrice, productDescription, productStatus, productImages, productCategory, productBrand, productOnSale, productSalePrice);
    }
}
