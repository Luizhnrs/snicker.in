package com.example.snikerin.controllers.responses;

import java.util.UUID;

public record ProductImageResponse(UUID id, String imageUrl, UUID productId) {
}
