package com.example.snikerin.controllers;

import com.example.snikerin.controllers.responses.OrderItemResponse;
import com.example.snikerin.controllers.responses.ProductImageResponse;
import com.example.snikerin.controllers.responses.ProductResponse;
import com.example.snikerin.models.OrderItem;
import com.example.snikerin.services.OrderItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/order-items")
@RequiredArgsConstructor
public class OrderItemController {

    private final OrderItemService orderItemService;

    @PostMapping("/{orderId}/{productId}")
    public ResponseEntity<OrderItemResponse> createOrderItem(
            @PathVariable UUID orderId,
            @PathVariable UUID productId,
            @RequestBody OrderItem orderItem) {
        OrderItem createdOrderItem = orderItemService.createOrderItem(orderId, productId,orderItem);
        return new ResponseEntity<>(toOrderItemResponse(createdOrderItem), HttpStatus.CREATED);
    }

    @GetMapping("/{orderItemId}")
    public ResponseEntity<OrderItemResponse> getOrderItemById(@PathVariable UUID orderItemId) {
        OrderItem orderItem = orderItemService.getOrderItemById(orderItemId);
        return new ResponseEntity<>(toOrderItemResponse(orderItem), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<OrderItemResponse>> getAllOrderItems() {
        List<OrderItem> orderItems = orderItemService.getAllOrderItems();
        List<OrderItemResponse> orderItemResponses = orderItems.stream()
                .map(this::toOrderItemResponse)
                .collect(Collectors.toList());
        return new ResponseEntity<>(orderItemResponses, HttpStatus.OK);
    }

    @DeleteMapping("/{orderItemId}")
    public ResponseEntity<Void> deleteOrderItem(@PathVariable UUID orderItemId) {
        orderItemService.deleteOrderItem(orderItemId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
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
