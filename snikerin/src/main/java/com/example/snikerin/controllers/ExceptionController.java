package com.example.snikerin.controllers;

import com.example.snikerin.exceptions.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.nio.file.attribute.UserPrincipalNotFoundException;

@ControllerAdvice
public class ExceptionController {

    @ExceptionHandler({
            CartItemNotFoundException.class,
            ProductNotFoundException.class,
            CartNotFoundException.class,
            AddressNotFoundException.class,
            ProductNotFoundException.class,
            UserPrincipalNotFoundException.class,
            OrderNotFoundException.class,
            OrderItemNotFoundException.class,
    })
    @ResponseBody
    public ResponseEntity<String> handleProductNotFoundException(ProductNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    @ResponseBody
    public ResponseEntity<String> handleGeneralException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
    }
}
