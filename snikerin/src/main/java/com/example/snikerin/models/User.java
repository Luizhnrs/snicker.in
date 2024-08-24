package com.example.snikerin.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "cpfCnpj", unique = true)
    private String cpfCnpj;
    @Column(name = "email", unique = true)
    private String email;
    @Column(name = "password")
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Orders> orders;

    @OneToOne
    private Cart cart;

    public User(String firstName, String lastName, String email, String password, String cpfCnpj) {
    }
}
