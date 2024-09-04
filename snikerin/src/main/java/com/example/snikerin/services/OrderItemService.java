package com.example.snikerin.services;

import com.example.snikerin.exceptions.OrderItemNotFoundException;
import com.example.snikerin.models.OrderItem;
import com.example.snikerin.repositories.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Transactional
    public OrderItem createOrderItem(OrderItem orderItem) {
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
