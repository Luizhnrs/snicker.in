package com.example.snikerin.services;

import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.Product;
import com.example.snikerin.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    @Transactional
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Transactional(readOnly = true)
    public Product getProductById(UUID id) throws ProductNotFoundException {
        return productRepository.findById(id)
                .orElseThrow(ProductNotFoundException::new);
    }

    @Transactional(readOnly = true)
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Transactional
    public Product updateProduct(UUID id, Product updatedProduct) throws ProductNotFoundException {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(ProductNotFoundException::new);

        // Directly update all fields
        existingProduct.setName(updatedProduct.getName());
        existingProduct.setDescription(updatedProduct.getDescription());
        existingProduct.setPrice(updatedProduct.getPrice());
        existingProduct.setCategory(updatedProduct.getCategory());
        existingProduct.setBrand(updatedProduct.getBrand());
        existingProduct.setOnSale(updatedProduct.isOnSale());
        existingProduct.setSalePrice(updatedProduct.getSalePrice());
        existingProduct.setImages(updatedProduct.getImages());

        return productRepository.save(existingProduct);
    }

    @Transactional
    public void deleteProduct(UUID id) throws ProductNotFoundException {
        Product productToDelete = productRepository.findById(id)
                .orElseThrow(ProductNotFoundException::new);

        productRepository.delete(productToDelete);
    }
}
