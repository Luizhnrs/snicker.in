package com.example.snikerin.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String productName;
    private BigDecimal productPrice; ;
    private String productDescription;
    private Boolean productStatus;
    private String productImages;
    private String productCategory;
    private String productBrand;
    private boolean productOnSale;
    private BigDecimal productSalePrice;

    public Products(String productName, String productDescription, BigDecimal productPrice, boolean productStatus, String productImage, String productCategory, String productBrand, boolean productOnSale, BigDecimal productSalePrice) {
    }
}
