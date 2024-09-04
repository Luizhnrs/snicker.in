package com.example.snikerin.services;

import com.example.snikerin.exceptions.CartItemNotFoundException;
import com.example.snikerin.models.CartItem;
import com.example.snikerin.repositories.CartItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CartItemService {

    private final CartItemRepository cartItemRepository;

    public CartItem createCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    public CartItem getCartItemById(UUID cartItemId) {
        return cartItemRepository.findById(cartItemId)
                .orElseThrow(CartItemNotFoundException::new);
    }

    public CartItem updateCartItem(CartItem cartItem) {
        if (!cartItemRepository.existsById(cartItem.getId())) {
            throw new CartItemNotFoundException();
        }
        return cartItemRepository.save(cartItem);
    }

    public void deleteCartItem(UUID cartItemId) {
        if (!cartItemRepository.existsById(cartItemId)) {
            throw new CartItemNotFoundException();
        }
        cartItemRepository.deleteById(cartItemId);
    }
}
