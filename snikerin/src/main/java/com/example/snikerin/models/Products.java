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

    @Column(name = "product_name")
    private String productName;
    @Column(name = "product_price")
    private BigDecimal productPrice;
    @Column(name = "product_description")
    private String productDescription;
    @Column(name = "product_status")
    private Boolean productStatus;
    @Column(name = "product_images")
    private String productImages;
    @Column(name = "product_category")
    private String productCategory;
    @Column(name = "product_brand")
    private String productBrand;
    @Column(name = "product_on_sale")
    private boolean productOnSale;
    @Column(name = "product_sale_price")
    private BigDecimal productSalePrice;

    public Products(String productName, BigDecimal productPrice, String productDescription, Boolean productStatus, String productImages, String productCategory, String productBrand, Boolean productOnSale, BigDecimal productSalePrice) {
    }

    public Object setProductOnSale() {
        return false;
    }
}
