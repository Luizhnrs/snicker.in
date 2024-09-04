package com.example.snikerin.controllers;

import com.example.snikerin.controllers.requests.CartItemRequest;
import com.example.snikerin.controllers.responses.CartItemResponse;
import com.example.snikerin.controllers.responses.ProductImageResponse;
import com.example.snikerin.controllers.responses.ProductResponse;
import com.example.snikerin.exceptions.CartItemNotFoundException;
import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.CartItem;
import com.example.snikerin.services.CartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/cart-items")
@RequiredArgsConstructor
public class CartItemController {

    private final CartItemService cartItemService;

    @PostMapping
    public ResponseEntity<CartItemResponse> createCartItem(@RequestParam UUID cartId, @RequestParam UUID productId, @RequestBody CartItemRequest cartItemRequest) {
        CartItem cartItem = cartItemRequest.toEntity();
        CartItem createdCartItem = cartItemService.createCartItem(cartId, productId, cartItem);
        return new ResponseEntity<>(toCartItemResponse(createdCartItem), HttpStatus.CREATED);
    }

    @GetMapping("/{cartItemId}")
    public ResponseEntity<CartItemResponse> getCartItemById(@PathVariable UUID cartItemId) {
        CartItem cartItem = cartItemService.getCartItemById(cartItemId);
        return new ResponseEntity<>(toCartItemResponse(cartItem), HttpStatus.OK);
    }

    @PutMapping("/{cartItemId}")
    public ResponseEntity<CartItemResponse> updateCartItem(@PathVariable UUID cartItemId, @RequestBody CartItemRequest cartItemRequest) {
        CartItem cartItem = cartItemRequest.toEntity();
        CartItem updatedCartItem = cartItemService.updateCartItem(cartItemId, cartItem);
        return new ResponseEntity<>(toCartItemResponse(updatedCartItem), HttpStatus.OK);
    }

    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable UUID cartItemId) {
        cartItemService.deleteCartItem(cartItemId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private CartItemResponse toCartItemResponse(CartItem cartItem) {
        return new CartItemResponse(
                cartItem.getId(),
                cartItem.getQuantity(),
                new ProductResponse(
                        cartItem.getProduct().getId(),
                        cartItem.getProduct().getName(),
                        cartItem.getProduct().getPrice(),
                        cartItem.getProduct().getDescription(),
                        cartItem.getProduct().getImages().stream()
                                .map(image -> new ProductImageResponse(image.getId(), image.getImageUrl(), image.getProduct().getId()))
                                .collect(Collectors.toList()),
                        cartItem.getProduct().getCategory(),
                        cartItem.getProduct().getSizes(),
                        cartItem.getProduct().getBrand(),
                        cartItem.getProduct().isOnSale(),
                        cartItem.getProduct().getSalePrice()
                )
        );
    }
}
