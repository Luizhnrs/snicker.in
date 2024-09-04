package com.example.snikerin.services;

import com.example.snikerin.exceptions.CartItemNotFoundException;
import com.example.snikerin.exceptions.CartNotFoundException;
import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.Cart;
import com.example.snikerin.models.CartItem;
import com.example.snikerin.models.Product;
import com.example.snikerin.repositories.CartItemRepository;
import com.example.snikerin.repositories.CartRepository;
import com.example.snikerin.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CartItemService {

    private final CartItemRepository cartItemRepository;
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;

    public CartItem createCartItem(UUID cartId, UUID productId, CartItem cartItem) {
        Product product = productRepository.findById(productId)
                .orElseThrow(ProductNotFoundException::new);
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(CartNotFoundException::new);

        cartItem.setProduct(product);
        cartItem.setCart(cart);
        cart.getItems().add(cartItem);

        cartRepository.save(cart);
        return cartItemRepository.save(cartItem);
    }

    public void removeItemFromCart(UUID cartId, UUID cartItemId) {
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(CartNotFoundException::new);

        cart.getItems().removeIf(cartItem -> cartItem.getId().equals(cartItemId));
        cartRepository.save(cart);
        cartItemRepository.deleteById(cartItemId);
    }

    public CartItem getCartItemById(UUID cartItemId) {
        return cartItemRepository.findById(cartItemId)
                .orElseThrow(CartItemNotFoundException::new);
    }

    public CartItem updateCartItem(UUID cartItemId, CartItem cartItem) {
        CartItem foundCartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(CartItemNotFoundException::new);

        foundCartItem.setQuantity(cartItem.getQuantity());
        return cartItemRepository.save(foundCartItem);
    }

    public void deleteCartItem(UUID cartItemId) {
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(CartItemNotFoundException::new);

        cartItemRepository.delete(cartItem);
    }
}
