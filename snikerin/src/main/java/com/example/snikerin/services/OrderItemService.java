package com.example.snikerin.services;

import com.example.snikerin.exceptions.OrderItemNotFoundException;
import com.example.snikerin.exceptions.OrderNotFoundException;
import com.example.snikerin.exceptions.ProductNotFoundException;
import com.example.snikerin.models.Order;
import com.example.snikerin.models.OrderItem;
import com.example.snikerin.models.Product;
import com.example.snikerin.repositories.OrderItemRepository;
import com.example.snikerin.repositories.OrderRepository;
import com.example.snikerin.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderItemService {

    private final OrderItemRepository orderItemRepository;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    public OrderItem createOrderItem(UUID orderId, UUID productId, OrderItem orderItem) {
        Order foundOrder = orderRepository.findById(orderId).orElseThrow(OrderNotFoundException::new);
        Product foundProduct = productRepository.findById(productId).orElseThrow(ProductNotFoundException::new);
        orderItem.setOrder(foundOrder);
        orderItem.setProduct(foundProduct);
        return orderItemRepository.save(orderItem);
    }

    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    public OrderItem getOrderItemById(UUID id) {
        return orderItemRepository.findById(id).orElseThrow(OrderItemNotFoundException::new);
    }

    public void deleteOrderItem(UUID id) {
        OrderItem foundOrderItem = orderItemRepository.findById(id).orElseThrow(OrderItemNotFoundException::new);
        orderItemRepository.delete(foundOrderItem);
    }
}
