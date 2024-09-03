package com.example.snikerin.controllers;

import com.example.snikerin.controllers.requests.ProductRequest;
import com.example.snikerin.controllers.responses.ProductImageResponse;
import com.example.snikerin.controllers.responses.ProductResponse;
import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.Product;
import com.example.snikerin.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductsController {
    private final ProductService productService;

    @PostMapping
    public ResponseEntity<ProductResponse> registerProduct(@RequestBody ProductRequest productRequest){
        Product product = productService.createProduct(productRequest.toEntity());
        ProductResponse productResponse = new ProductResponse(
                product.getId(),
                product.getProductName(),
                product.getProductPrice(),
                product.getProductDescription(),
                product.getProductImages().stream().map(productImage ->
                        new ProductImageResponse(
                                productImage.getId(),
                                productImage.getImageUrl(),
                                productImage.getProduct().getId()
                        )).toList(),
                product.getProductCategory(),
                product.getProductBrand(),
                product.isProductOnSale(),
                product.getProductSalePrice()

        );
        return ResponseEntity.status(HttpStatus.CREATED).body(productResponse);
    }

    @GetMapping
    public ResponseEntity<List<ProductResponse>> getAllProducts(){
        List<Product> products = productService.getAllProducts();
        List<ProductResponse> productResponses = products.stream()
                .map(product -> new ProductResponse(
                        product.getId(),
                        product.getProductName(),
                        product.getProductPrice(),
                        product.getProductDescription(),
                        product.getProductImages().stream().map(productImage ->
                                new ProductImageResponse(
                                        productImage.getId(),
                                        productImage.getImageUrl(),
                                        productImage.getProduct().getId()
                                )).toList(),
                        product.getProductCategory(),
                        product.getProductBrand(),
                        product.isProductOnSale(),
                        product.getProductSalePrice()
                )).toList();
        return ResponseEntity.status(HttpStatus.OK).body(productResponses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable UUID id) throws ProductNotFoundException {
        try{
            Product product = productService.getProductById(id);
            ProductResponse productResponse = new ProductResponse(
                    product.getId(),
                    product.getProductName(),
                    product.getProductPrice(),
                    product.getProductDescription(),
                    product.getProductImages().stream().map(productImage ->
                            new ProductImageResponse(
                                    productImage.getId(),
                                    productImage.getImageUrl(),
                                    productImage.getProduct().getId()
                            )).toList(),
                    product.getProductCategory(),
                    product.getProductBrand(),
                    product.isProductOnSale(),
                    product.getProductSalePrice()
            );
            return ResponseEntity.status(HttpStatus.OK).body(productResponse);
        }catch (ProductNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<ProductResponse> updateProduct(@PathVariable("id") UUID id, @RequestBody ProductRequest productRequest) throws ProductNotFoundException {
        Product product = productService.updateProduct(id, productRequest.toEntity());
        if(product == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        ProductResponse productResponse = new ProductResponse(
                product.getId(),
                product.getProductName(),
                product.getProductPrice(),
                product.getProductDescription(),
                product.getProductImages().stream().map(productImage ->
                        new ProductImageResponse(
                                productImage.getId(),
                                productImage.getImageUrl(),
                                productImage.getProduct().getId()
                        )).toList(),
                product.getProductCategory(),
                product.getProductBrand(),
                product.isProductOnSale(),
                product.getProductSalePrice()
        );
        return ResponseEntity.ok(productResponse);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") UUID id) throws ProductNotFoundException {
        productService.deleteProduct(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
