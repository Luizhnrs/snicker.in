package com.example.snikerin.controllers.requests;

import javax.validation.constraints.Size;
import com.example.snikerin.models.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserRequest(
        @NotBlank(message = "O primeiro nome é obrigatório")
        String firstName,

        @NotBlank(message = "O sobrenome é obrigatório")
        String lastName,

        @NotBlank(message = "CPF é obrigatório")
        String cpf,

        @NotBlank(message = "E-mail é obrigatório")
        @Email(message = "O e-mail deve ser válido")
        String email,

        @NotBlank(message = "A senha é obrigatória")
        @Size(min = 6, message = "A senha deve ter pelo menos 6 caracteres")
        String password
) {
    public User toEntity() {
        return new User(null, firstName, lastName, cpf, email, password, null);
    }
}
