package com.example.snikerin.services;

import com.example.snikerin.exceptions.CartNotFoundException;
import com.example.snikerin.models.Cart;
import com.example.snikerin.models.CartItem;
import com.example.snikerin.repositories.CartRepository;
import com.example.snikerin.repositories.CartItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;

    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public Cart getCartById(UUID cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(CartNotFoundException::new);
    }

    public Cart addItemToCart(UUID cartId, CartItem cartItem) {
        Cart cart = getCartById(cartId);
        cart.getItems().add(cartItem);
        cartItem.setCart(cart);
        cartItemRepository.save(cartItem);
        return cartRepository.save(cart);
    }

    public void removeItemFromCart(UUID cartId, UUID cartItemId) {
        Cart cart = getCartById(cartId);
        cart.getItems().removeIf(cartItem -> cartItem.getId().equals(cartItemId));
        cartRepository.save(cart);
        cartItemRepository.deleteById(cartItemId);
    }

    public void clearCart(UUID cartId) {
        Cart cart = getCartById(cartId);
        cart.getItems().clear();
        cartRepository.save(cart);
        cartItemRepository.deleteAll(cart.getItems());
    }
}
