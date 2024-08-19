package com.example.snikerin.services;

import com.example.snikerin.exceptions.CartCannotBeCreatedException;
import com.example.snikerin.models.Cart;
import com.example.snikerin.repositories.CartRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CartService {
    private CartRepository cartRepository;
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public Cart getCartById(UUID id) throws CartCannotBeCreatedException {
        return cartRepository.findById(id).orElseThrow(CartCannotBeCreatedException::new);
    }

    public Cart updateCart(Cart cart) throws CartCannotBeCreatedException {
        Cart cartToUpdate = cartRepository.findById(cart.getId()).orElseThrow(CartCannotBeCreatedException::new);
        cartToUpdate.setBuyer(cart.getBuyer());
        cartToUpdate.setPrice(cart.getPrice());
        cartToUpdate.setItems(cart.getItems());
        cartToUpdate.setCreatedAt(cart.getCreatedAt());
        cartToUpdate.setUpdatedAt(cartToUpdate.getUpdatedAt());
        return cartRepository.save(cartToUpdate);
    }

    public void deleteCart(UUID id, Cart cart) throws CartCannotBeCreatedException {
        Cart cartToDelete = cartRepository.findById(cart.getId()).orElseThrow(CartCannotBeCreatedException::new);
        cartRepository.delete(cartToDelete);
    }

}
