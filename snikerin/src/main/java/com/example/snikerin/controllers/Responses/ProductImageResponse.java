package com.example.snikerin.controllers.Responses;

import java.util.UUID;

public record ProductImageResponse(UUID id, String imageUrl, UUID productId) {
}
