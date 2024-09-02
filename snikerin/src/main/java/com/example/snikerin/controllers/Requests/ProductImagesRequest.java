package com.example.snikerin.controllers.Requests;

import java.util.List;
import java.util.UUID;

public record ProductImagesRequest(UUID productId, List<ProductImageRequest> images) {
}
