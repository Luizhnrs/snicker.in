package com.example.snikerin.controllers.responses;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record OrderResponse(
        UUID id,
        String status,
        LocalDateTime createdAt,
        UUID userId,
        List<OrderItemResponse> items
) {
}
