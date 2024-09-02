package com.example.snikerin.controllers;

import com.example.snikerin.controllers.Requests.ProductImageRequest;
import com.example.snikerin.controllers.Responses.ProductImageResponse;
import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.ProductImage;
import com.example.snikerin.services.ProductImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/product-images")
@RequiredArgsConstructor
public class ProductImageController {

    @Autowired
    private ProductImageService productImageService;

    @PostMapping("/upload")
    public ResponseEntity<ProductImageResponse> uploadImage(@RequestBody ProductImageRequest productImageRequest) throws IOException, ProductNotFoundException {
        ProductImage productImage = productImageService.uploadImage(productImageRequest.fileName(), productImageRequest.data(), productImageRequest.productId());
        ProductImageResponse productImageResponse = new ProductImageResponse(
                productImage.getId(),
                productImage.getImageUrl(),
                productImage.getProduct().getId()
        );
        return ResponseEntity.status(HttpStatus.OK).body(productImageResponse);
    }
}
