package com.example.snikerin.controllers.responses;

import java.math.BigDecimal;
import java.util.UUID;

public record OrderItemResponse(
        UUID id,
        int quantity,
        BigDecimal price,
        UUID orderId,
        ProductResponse product
) {
}
