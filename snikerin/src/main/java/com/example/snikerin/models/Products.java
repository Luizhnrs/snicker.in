package com.example.snikerin.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_products")
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "product_price", nullable = false)
    private BigDecimal productPrice;

    @Column(name = "product_description", nullable = false)
    private String productDescription;

    @Column(name = "product_images", nullable = false)
    private String productImages;

    @Column(name = "product_category", nullable = false)
    private String productCategory;

    @Column(name = "product_brand", nullable = false)
    private String productBrand;

    @Column(name = "product_on_sale", nullable = false)
    private boolean productOnSale;

    @Column(name = "product_sale_price")
    private BigDecimal productSalePrice;

    public Products(String productName, BigDecimal productPrice, String productDescription, String productImages, String productCategory, String productBrand, Boolean productOnSale, BigDecimal productSalePrice) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productImages = productImages;
        this.productCategory = productCategory;
        this.productBrand = productBrand;
        this.productOnSale = productOnSale;
        this.productSalePrice = productSalePrice;
    }
}
