package com.example.snikerin.services;

import com.example.snikerin.exceptions.UserNotFoundException;
import com.example.snikerin.models.User;
import com.example.snikerin.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(UUID id) throws UserNotFoundException {
     return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }

    public User updateUser(UUID id, User user) throws UserNotFoundException {
        User userSearched = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
        userSearched.setFirstName(user.getFirstName());
        userSearched.setLastName(user.getLastName());
        userSearched.setCpfCnpj(user.getCpfCnpj());
        userSearched.setEmail(user.getEmail());
        userSearched.setPassword(user.getPassword());
        return userRepository.save(userSearched);
    }

    public void deleteUser(UUID id) throws UserNotFoundException {
        User userToDelete = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
        userRepository.delete(userToDelete);
    }
}
