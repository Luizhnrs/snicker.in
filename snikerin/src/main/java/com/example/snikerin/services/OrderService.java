package com.example.snikerin.services;

import com.example.snikerin.exceptions.OrderNotFoundException;
import com.example.snikerin.models.Order;
import com.example.snikerin.repositories.OrderRepository;
import com.example.snikerin.repositories.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(UUID id) {
        return orderRepository.findById(id).orElseThrow(OrderNotFoundException::new);
    }

    public Order updateOrder(UUID id, Order updatedOrder) {
        Order foundOrder = orderRepository.findById(id).orElseThrow(OrderNotFoundException::new);
        foundOrder.setStatus(updatedOrder.getStatus());
        return orderRepository.save(foundOrder);
    }

    public void deleteOrder(UUID id) {
        Order foundOrder = orderRepository.findById(id).orElseThrow(OrderNotFoundException::new);
        orderRepository.delete(foundOrder);
    }
}
