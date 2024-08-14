package com.example.snikerin.dtos;

import com.example.snikerin.models.Cart;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.NotFound;

import java.math.BigDecimal;
import java.util.Date;

public record CreateNewCart(
        @NotNull String items,
        @NotNull BigDecimal price,
        @NotNull String buyer
) {
    public Cart toCart() {
       return new Cart(
               items,
               price,
               buyer
       );
    }
}
