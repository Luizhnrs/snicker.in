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
@Table(name = "tb_orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "phone")
    private String phone;
    @Column(name = "Address")
    private String address;
    @Column(name = "city")
    private String city;
    @Column(name = "reference")
    private String reference;
    @Column(name = "state")
    private String state;
    @Column(name = "cep")
    private String cep;
    @Column(name = "country")
    private String country;
    @Column(name = "amount")
    private BigDecimal amount;
    @Column(name = "notes")
    private String notes;

}
