package com.example.snikerin.controllers.requests;

import java.util.List;
import java.util.UUID;

public record ProductImagesRequest(UUID productId, List<ProductImageRequest> images) {
}
