package com.example.snikerin.controllers;

import com.example.snikerin.controllers.Requests.ProductImageRequest;
import com.example.snikerin.controllers.Requests.ProductImagesRequest;
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
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/product-images")
@RequiredArgsConstructor
public class ProductImageController {

    @Autowired
    private ProductImageService productImageService;

    @PostMapping("/upload")
    public ResponseEntity<List<ProductImageResponse>> uploadImages(@RequestBody ProductImagesRequest productImagesRequest) throws IOException, ProductNotFoundException {
        List<ProductImage> productImages = productImageService.uploadImages(productImagesRequest.productId(), productImagesRequest.images());

        List<ProductImageResponse> responses = productImages.stream()
                .map(productImage -> new ProductImageResponse(
                        productImage.getId(),
                        productImage.getImageUrl(),
                        productImage.getProduct().getId()
                ))
                .collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(responses);
    }
}
