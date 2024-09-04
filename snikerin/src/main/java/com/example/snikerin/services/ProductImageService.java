package com.example.snikerin.services;

import com.example.snikerin.controllers.requests.ProductImageRequest;
import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.ProductImage;
import com.example.snikerin.models.Product;
import com.example.snikerin.repositories.ProductImageRepository;
import com.example.snikerin.repositories.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Base64;
import java.util.List;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class ProductImageService {

    @Autowired
    private final ProductImageRepository productImageRepository;

    @Autowired
    private ProductRepository productRepository;

    private static final String UPLOAD_DIR = "src/main/resources/static/uploads/";

    public List<ProductImage> uploadImages(UUID productId, List<ProductImageRequest> imageRequests) throws IOException, ProductNotFoundException {
        File directory = new File(UPLOAD_DIR);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        Product foundProduct = productRepository.findById(productId)
                .orElseThrow(ProductNotFoundException::new);

        return imageRequests.stream().map(request -> {
            try {
                String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS"));

                Pattern pattern = Pattern.compile("\\.(\\w+)$");
                Matcher matcher = pattern.matcher(request.filename());

                if (matcher.find()) {
                    String fileExtension = matcher.group(1);
                    fileExtension = "." + fileExtension;

                    String fileName = timestamp + fileExtension;
                    Path filePath = Paths.get(UPLOAD_DIR + fileName);

                    byte[] imageBytes = Base64.getDecoder().decode(request.base64String());
                    Files.write(filePath, imageBytes);

                    String fileUrl = "/uploads/" + fileName;
                    ProductImage productImage = new ProductImage(null, fileUrl, foundProduct);
                    return productImageRepository.save(productImage);
                } else {
                    throw new IllegalArgumentException("Invalid file extension in filename: " + request.filename());
                }

            } catch (IOException e) {
                throw new RuntimeException("Failed to save image", e);
            }
        }).collect(Collectors.toList());
    }
}
