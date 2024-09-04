package com.example.snikerin.services;

import com.example.snikerin.exceptions.CartNotFoundException;
import com.example.snikerin.exceptions.UserNotFoundException;
import com.example.snikerin.models.Cart;
import com.example.snikerin.models.User;
import com.example.snikerin.repositories.CartRepository;
import com.example.snikerin.repositories.CartItemRepository;
import com.example.snikerin.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final UserRepository userRepository;

    public Cart createCart(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(UserNotFoundException::new);

        Cart cart = new Cart(null, user, null);
        return cartRepository.save(cart);
    }

    public Cart getCartById(UUID cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(CartNotFoundException::new);
    }

    public void clearCart(UUID cartId) {
        Cart cart = getCartById(cartId);
        cart.getItems().clear();
        cartRepository.save(cart);
        cartItemRepository.deleteAll(cart.getItems());
    }
}
