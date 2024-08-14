package com.example.snikerin.repositories;

import com.example.snikerin.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProductRepository extends JpaRepository<Products, UUID> {
}
