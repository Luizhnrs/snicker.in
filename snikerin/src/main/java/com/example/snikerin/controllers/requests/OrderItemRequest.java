package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.OrderItem;

import java.math.BigDecimal;

public record OrderItemRequest(int quantity, BigDecimal price) {
    public OrderItem toEntity() {
        return new OrderItem(null, quantity, price, null, null);
    }
}
