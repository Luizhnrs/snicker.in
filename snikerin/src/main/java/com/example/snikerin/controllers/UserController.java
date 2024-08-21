package com.example.snikerin.controllers;

import com.example.snikerin.controllers.Requests.UserRequest;
import com.example.snikerin.controllers.Responses.UserResponse;
import com.example.snikerin.dtos.CreateUserDto;
import com.example.snikerin.exceptions.UserNotFoundException;
import com.example.snikerin.models.User;
import com.example.snikerin.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
private final UserService userService;

@PostMapping()
    public ResponseEntity<UserResponse> createUser(@RequestBody UserRequest userRequest ) {
    User user = userService.createUser(userRequest.toEntity());
    UserResponse userResponse = new UserResponse(
            user.getId(),
            user.getFirstName(),
            user.getLastName(),
            user.getCpfCnpj(),
            user.getEmail(),
            user.getPassword()
    );
    return ResponseEntity.status(HttpStatus.CREATED).body(userResponse);
}

@GetMapping()
    public ResponseEntity<List<UserResponse>> getAllUsers() {
    List<User> users = userService.getAllUsers();
    List<UserResponse> userResponseList = users.stream()
            .map(user -> new UserResponse(
                    user.getId(),
                    user.getFirstName(),
                    user.getLastName(),
                    user.getCpfCnpj(),
                    user.getEmail(),
                    user.getPassword()
            )).toList();
            return ResponseEntity.status(HttpStatus.OK).body(userResponseList);
}

@GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable("id") UUID id) {
        try {
            User user = userService.getUserById(id);
            UserResponse userResponse = new UserResponse(
                    user.getId(),
                    user.getFirstName(),
                    user.getLastName(),
                    user.getCpfCnpj(),
                    user.getEmail(),
                    user.getPassword()
            );
            return ResponseEntity.ok(userResponse);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
@PutMapping("/{id}")
    public ResponseEntity<UserResponse> updateUser(@PathVariable("id") UUID id, @RequestBody UserRequest userRequest ) throws UserNotFoundException {
    try{
        User user = userService.updateUser(id, userRequest.toEntity());
        UserResponse userResponse = new UserResponse(
           user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPassword(),
                user.getCpfCnpj()
        );
        return ResponseEntity.ok(userResponse);
    } catch (UserNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}

@DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") UUID id) throws UserNotFoundException {
    userService.deleteUser(id);
    return ResponseEntity.ok().build();
}

}
