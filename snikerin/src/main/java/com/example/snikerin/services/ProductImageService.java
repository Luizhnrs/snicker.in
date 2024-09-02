package com.example.snikerin.services;

import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.ProductImage;
import com.example.snikerin.models.Products;
import com.example.snikerin.repositories.ProductImageRepository;
import com.example.snikerin.repositories.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.UUID;

@AllArgsConstructor
@Service
public class ProductImageService {

    @Autowired
    private final ProductImageRepository productImageRepository;

    @Autowired
    private ProductRepository productRepository;

    private static final String UPLOAD_DIR = "uploads/";

    public ProductImage uploadImage(String filename, String data, UUID productId) throws IOException, ProductNotFoundException {
        File directory = new File(UPLOAD_DIR);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        byte[] imageBytes = Base64.getDecoder().decode(data);

        Path filePath = Paths.get(UPLOAD_DIR + filename);

        Files.write(filePath, imageBytes);

        String fileUrl = "/uploads/" + filename;

        Products foundProduct = productRepository.findById(productId).orElseThrow(ProductNotFoundException::new);
        ProductImage productImage = new ProductImage(fileUrl, foundProduct);
        return productImageRepository.save(productImage);
    }

}
