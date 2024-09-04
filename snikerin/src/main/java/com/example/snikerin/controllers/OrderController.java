package com.example.snikerin.controllers;

import com.example.snikerin.controllers.responses.OrderResponse;
import com.example.snikerin.controllers.responses.OrderItemResponse;
import com.example.snikerin.controllers.responses.ProductImageResponse;
import com.example.snikerin.controllers.responses.ProductResponse;
import com.example.snikerin.models.Order;
import com.example.snikerin.models.OrderItem;
import com.example.snikerin.services.OrderService;
import com.example.snikerin.services.OrderItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final OrderItemService orderItemService;

    @PostMapping("/{userId}")
    public ResponseEntity<OrderResponse> createOrder(
            @PathVariable UUID userId,
            @RequestBody Order order) {
        Order createdOrder = orderService.createOrder(userId, order);
        return new ResponseEntity<>(toOrderResponse(createdOrder), HttpStatus.CREATED);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderResponse> getOrderById(@PathVariable UUID orderId) {
        Order order = orderService.getOrderById(orderId);
        return new ResponseEntity<>(toOrderResponse(order), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<OrderResponse>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        List<OrderResponse> orderResponses = orders.stream()
                .map(this::toOrderResponse)
                .collect(Collectors.toList());
        return new ResponseEntity<>(orderResponses, HttpStatus.OK);
    }

    @PutMapping("/{orderId}")
    public ResponseEntity<OrderResponse> updateOrder(@PathVariable UUID orderId, @RequestBody Order order) {
        Order updatedOrder = orderService.updateOrder(orderId, order);
        return new ResponseEntity<>(toOrderResponse(updatedOrder), HttpStatus.OK);
    }

    @DeleteMapping("/{orderId}")
    public ResponseEntity<Void> deleteOrder(@PathVariable UUID orderId) {
        orderService.deleteOrder(orderId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private OrderResponse toOrderResponse(Order order) {
        return new OrderResponse(
                order.getId(),
                order.getStatus(),
                order.getCreatedAt(),
                order.getUser().getId(),
                order.getItems().stream()
                        .map(this::toOrderItemResponse)
                        .collect(Collectors.toList())
        );
    }

    private OrderItemResponse toOrderItemResponse(OrderItem orderItem) {
        return new OrderItemResponse(
                orderItem.getId(),
                orderItem.getQuantity(),
                orderItem.getPrice(),
                orderItem.getOrder().getId(),
                new ProductResponse(
                        orderItem.getProduct().getId(),
                        orderItem.getProduct().getName(),
                        orderItem.getProduct().getPrice(),
                        orderItem.getProduct().getDescription(),
                        orderItem.getProduct().getImages().stream()
                                .map(image -> new ProductImageResponse(image.getId(), image.getImageUrl(), orderItem.getProduct().getId()))
                                .collect(Collectors.toList()),
                        orderItem.getProduct().getCategory(),
                        orderItem.getProduct().getSizes(),
                        orderItem.getProduct().getBrand(),
                        orderItem.getProduct().isOnSale(),
                        orderItem.getProduct().getSalePrice())
        );
    }
}
