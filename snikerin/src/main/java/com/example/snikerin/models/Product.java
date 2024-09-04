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
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "description", nullable = false, length = 1000)
    private String description;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "sizes")
    private String sizes;

    @Column(name = "brand", nullable = false)
    private String brand;

    @Column(name = "on_sale", nullable = false)
    private boolean onSale;

    @Column(name = "sale_price")
    private BigDecimal salePrice;

    @OneToMany(mappedBy = "product")
    private List<CartItem> cartItems;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductImage> images;
}
