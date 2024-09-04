package com.example.snikerin.controllers;

import com.example.snikerin.controllers.requests.AddressRequest;
import com.example.snikerin.controllers.responses.AddressResponse;
import com.example.snikerin.models.Address;
import com.example.snikerin.services.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/addresses")
@RequiredArgsConstructor
public class AddressController {

    private final AddressService addressService;

    @PostMapping("/{userId}")
    public ResponseEntity<AddressResponse> createAddress(@Valid @RequestBody AddressRequest addressRequest, @PathVariable UUID userId) {
        Address address = addressRequest.toEntity();
        Address createdAddress = addressService.createAddress(userId, address);
        return ResponseEntity.status(HttpStatus.CREATED).body(convertToResponse(createdAddress));
    }

    @GetMapping
    public ResponseEntity<List<AddressResponse>> getAllAddresses() {
        List<AddressResponse> addressResponses = addressService.getAllAddresses().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(addressResponses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddressResponse> getAddressById(@PathVariable UUID id) {
        Address address = addressService.getAddressById(id);
        return ResponseEntity.ok(convertToResponse(address));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddressResponse> updateAddress(@PathVariable UUID id, @Valid @RequestBody AddressRequest addressRequest) {
        Address address = addressRequest.toEntity();
        Address updatedAddress = addressService.updateAddress(id, address);
        return ResponseEntity.ok(convertToResponse(updatedAddress));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAddress(@PathVariable UUID id) {
        addressService.deleteAddress(id);
        return ResponseEntity.noContent().build();
    }

    private AddressResponse convertToResponse(Address address) {
        return new AddressResponse(
                address.getId(),
                address.getStreet(),
                address.getNumber(),
                address.getComplement(),
                address.getNeighborhood(),
                address.getCity(),
                address.getState(),
                address.getCep(),
                address.getUser() != null ? address.getUser().getId() : null
        );
    }
}
