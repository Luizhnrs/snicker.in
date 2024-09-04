package com.example.snikerin.controllers.requests;

import com.example.snikerin.models.Order;
import jakarta.validation.constraints.NotBlank;

public record OrderRequest(
        @NotBlank(message = "O status do pedido é obrigatório!")
        String status) {
    public Order toEntity(){
        return new Order(null, status, null, null, null);
    }
}
