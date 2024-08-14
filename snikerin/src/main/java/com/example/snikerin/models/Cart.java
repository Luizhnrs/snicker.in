package com.example.snikerin.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "items")
    private String items;
    @Column(name = "prices")
    private BigDecimal price;
    @Column(name = "buyers")
    private String buyer;
    private Date createdAt;
    private Date updatedAt;
    @OneToMany
    private List<Products> products;


    public Cart(String items, BigDecimal price, String buyer) {
    }
}
