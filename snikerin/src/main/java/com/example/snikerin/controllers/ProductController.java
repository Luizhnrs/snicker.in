package com.example.snikerin.controllers;

import com.example.snikerin.controllers.requests.ProductRequest;
import com.example.snikerin.controllers.responses.ProductImageResponse;
import com.example.snikerin.controllers.responses.ProductResponse;
import com.example.snikerin.models.Product;
import com.example.snikerin.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @PostMapping
    public ResponseEntity<ProductResponse> registerProduct(@RequestBody ProductRequest productRequest) {
        Product product = productService.createProduct(productRequest.toEntity());
        ProductResponse productResponse = convertToProductResponse(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(productResponse);
    }

    @GetMapping
    public ResponseEntity<List<ProductResponse>> getAllProducts() {
        List<ProductResponse> productResponses = productService.getAllProducts().stream()
                .map(this::convertToProductResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(productResponses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable UUID id) {
        Product product = productService.getProductById(id);
        ProductResponse productResponse = convertToProductResponse(product);
        return ResponseEntity.ok(productResponse);
    }

    @PutMapping("{id}")
    public ResponseEntity<ProductResponse> updateProduct(@PathVariable UUID id, @RequestBody ProductRequest productRequest) {
        Product product = productService.updateProduct(id, productRequest.toEntity());
        ProductResponse productResponse = convertToProductResponse(product);
        return ResponseEntity.ok(productResponse);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable UUID id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    private ProductResponse convertToProductResponse(Product product) {
        return new ProductResponse(
                product.getId(),
                product.getName(),
                product.getPrice(),
                product.getDescription(),
                product.getImages().stream()
                        .map(image -> new ProductImageResponse(image.getId(), image.getImageUrl(), product.getId()))
                        .collect(Collectors.toList()),
                product.getCategory(),
                product.getSizes(),
                product.getBrand(),
                product.isOnSale(),
                product.getSalePrice()
        );
    }
}
