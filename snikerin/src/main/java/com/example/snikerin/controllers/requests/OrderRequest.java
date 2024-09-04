package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.Order;

public record OrderRequest(String status) {
    public Order toEntity(){
        return new Order(null, status, null, null, null);
    }
}
