package com.example.snikerin.controllers;

import com.example.snikerin.controllers.Requests.LoginRequest;
import com.example.snikerin.controllers.Responses.LoginResponse;
import com.example.snikerin.services.TokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;

    private final TokenService tokenService;

    @PostMapping()
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        UsernamePasswordAuthenticationToken usernamePassword =
                new UsernamePasswordAuthenticationToken(loginRequest.email(), loginRequest.password());

        Authentication auth = authenticationManager.authenticate(usernamePassword);

        String token = tokenService.generateToken(auth.getName());

        return ResponseEntity.ok(new LoginResponse(token));
    }
}