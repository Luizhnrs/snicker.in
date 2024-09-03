package com.example.snikerin.services;

import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.Product;
import com.example.snikerin.repositories.ProductRepository;
import com.example.snikerin.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductService {
    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository, UserRepository userRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(UUID id) throws ProductNotFoundException {
        return productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product updateProduct(UUID id, Product product) {
        Product productSearched = productRepository.findById(id).get();
        productSearched.setProductName(product.getProductName());
        productSearched.setProductDescription(product.getProductDescription());
        productSearched.setProductPrice(product.getProductPrice());
        productSearched.setProductBrand(product.getProductBrand());
        productSearched.setProductCategory(product.getProductCategory());
        productSearched.setProductImages(product.getProductImages());
        productSearched.setProductOnSale(product.isProductOnSale());
        return productRepository.save(productSearched);
    }

    public void deleteProduct(UUID id) throws ProductNotFoundException{
        Product productToDelete = productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
        productRepository.delete(productToDelete);
    }
}

