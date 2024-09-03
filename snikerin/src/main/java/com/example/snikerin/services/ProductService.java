package com.example.snikerin.services;

import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.Product;
import com.example.snikerin.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(UUID id) throws ProductNotFoundException {
        return productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product updateProduct(UUID id, Product updatedProduct) throws ProductNotFoundException {
        Product existingProduct = productRepository.findById(id).orElseThrow(ProductNotFoundException::new);

        existingProduct.setName(updatedProduct.getName());
        existingProduct.setDescription(updatedProduct.getDescription());
        existingProduct.setPrice(updatedProduct.getPrice());
        existingProduct.setCategory(updatedProduct.getCategory());
        existingProduct.setBrand(updatedProduct.getBrand());
        existingProduct.setImages(updatedProduct.getImages());
        existingProduct.setOnSale(updatedProduct.isOnSale());
        existingProduct.setSalePrice(updatedProduct.getSalePrice());

        return productRepository.save(existingProduct);
    }

    public void deleteProduct(UUID id) throws ProductNotFoundException {
        Product productToDelete = productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
        productRepository.delete(productToDelete);
    }
}
