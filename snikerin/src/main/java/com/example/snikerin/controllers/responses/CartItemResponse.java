package com.example.snikerin.controllers.responses;

import java.util.UUID;

public record CartItemResponse(
        UUID id,
        int quantity,
        ProductResponse product
) {
}
