package com.example.snikerin.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
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

    @Column(name = "product_category", nullable = false)
    private String productCategory;

    @Column(name = "product_brand", nullable = false)
    private String productBrand;

    @Column(name = "product_on_sale", nullable = false)
    private boolean productOnSale;

    @Column(name = "product_sale_price")
    private BigDecimal productSalePrice;

    @OneToMany(mappedBy = "product")
    private List<ProductImage> productImages;

    public Products(String productName, BigDecimal productPrice, String productDescription, String productCategory, String productBrand, Boolean productOnSale, BigDecimal productSalePrice) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productCategory = productCategory;
        this.productBrand = productBrand;
        this.productOnSale = productOnSale;
        this.productSalePrice = productSalePrice;
        this.productImages = new ArrayList<>();
    }
}
