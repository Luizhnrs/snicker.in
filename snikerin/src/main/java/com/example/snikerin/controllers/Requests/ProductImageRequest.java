package com.example.snikerin.controllers.Requests;



import java.util.UUID;

public record ProductImageRequest(String fileName, String data, UUID productId) {
}
