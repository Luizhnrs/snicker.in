package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.CartItem;

import java.util.UUID;

public record CartItemRequest(int quantity) {
    public CartItem toEntity() {
        return new CartItem(null, quantity, null, null);
    }
}
