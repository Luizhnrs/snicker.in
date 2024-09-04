package com.example.snikerin.services;

import com.example.snikerin.exceptions.OrderCannotBeCreatedException;
import com.example.snikerin.models.Order;
import com.example.snikerin.repositories.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class OrderService {
    private OrderRepository orderRepository;
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(UUID id) throws OrderCannotBeCreatedException {
        return orderRepository.findById(id).orElseThrow(OrderCannotBeCreatedException::new);
    }

    public Order updateOrder(UUID id, Order order) throws OrderCannotBeCreatedException {
        Order orderToUpdate = orderRepository.findById(id).orElseThrow(OrderCannotBeCreatedException::new);
        orderToUpdate.setAddress(order.getAddress());
        orderToUpdate.setCity(order.getCity());
        orderToUpdate.setCountry(order.getCountry());
        orderToUpdate.setEmail(order.getEmail());
        orderToUpdate.setFirstName(order.getFirstName());
        orderToUpdate.setLastName(order.getLastName());
        orderToUpdate.setPhone(order.getPhone());
        orderToUpdate.setAmount(order.getAmount());
        orderToUpdate.setCep(order.getCep());
        orderToUpdate.setReference(order.getReference());
        orderToUpdate.setNotes(order.getNotes());
        return orderRepository.save(orderToUpdate);
    }

    public void deleteOrder(UUID id) throws OrderCannotBeCreatedException {
        Order orderToDelete = orderRepository.findById(id).orElseThrow(OrderCannotBeCreatedException::new);
        orderRepository.delete(orderToDelete);
    }
}
