package com.example.snikerin.services;

import com.example.snikerin.dtos.CreateUserDto;
import com.example.snikerin.models.User;
import com.example.snikerin.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(CreateUserDto dto) {
        User user = new User();
        return userRepository.save(user);
    }

}
