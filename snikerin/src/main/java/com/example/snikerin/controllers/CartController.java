package com.example.snikerin.controllers;

import com.example.snikerin.controllers.responses.CartResponse;
import com.example.snikerin.controllers.responses.CartItemResponse;
import com.example.snikerin.controllers.responses.ProductImageResponse;
import com.example.snikerin.controllers.responses.ProductResponse;
import com.example.snikerin.models.Cart;
import com.example.snikerin.services.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/carts")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping("/{userId}")
    public ResponseEntity<CartResponse> createCart(@PathVariable UUID userId) {
        Cart cart = cartService.createCart(userId);
        return new ResponseEntity<>(toCartResponse(cart), HttpStatus.CREATED);
    }

    @GetMapping("/{cartId}")
    public ResponseEntity<CartResponse> getCartById(@PathVariable UUID cartId) {
        Cart cart = cartService.getCartById(cartId);
        return new ResponseEntity<>(toCartResponse(cart), HttpStatus.OK);
    }

    @DeleteMapping("/{cartId}")
    public ResponseEntity<Void> clearCart(@PathVariable UUID cartId) {
        cartService.clearCart(cartId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private CartResponse toCartResponse(Cart cart) {
        return new CartResponse(
                cart.getId(),
                cart.getUser().getId(),
                cart.getItems().stream()
                        .map(item -> new CartItemResponse(
                                item.getId(),
                                item.getQuantity(),
                                new ProductResponse(
                                        item.getProduct().getId(),
                                        item.getProduct().getName(),
                                        item.getProduct().getPrice(),
                                        item.getProduct().getDescription(),
                                        item.getProduct().getImages().stream()
                                                .map(image -> new ProductImageResponse(image.getId(), image.getImageUrl(), image.getProduct().getId()))
                                                .collect(Collectors.toList()),
                                        item.getProduct().getCategory(),
                                        item.getProduct().getSizes(),
                                        item.getProduct().getBrand(),
                                        item.getProduct().isOnSale(),
                                        item.getProduct().getSalePrice()
                                )
                        ))
                        .toList()
        );
    }
}
