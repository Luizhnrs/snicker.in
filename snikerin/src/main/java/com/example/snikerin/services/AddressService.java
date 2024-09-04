package com.example.snikerin.services;

import com.example.snikerin.exceptions.AddressNotFoundException;
import com.example.snikerin.models.Address;
import com.example.snikerin.models.User;
import com.example.snikerin.repositories.AddressRepository;
import com.example.snikerin.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    public Address createAddress(UUID userId, Address address) {
        User user = userRepository.findById(userId)
                .orElseThrow(AddressNotFoundException::new);

        address.setUser(user);
        return addressRepository.save(address);
    }

    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    public Address getAddressById(UUID id) {
        return addressRepository.findById(id)
                .orElseThrow(AddressNotFoundException::new);
    }

    public Address updateAddress(UUID id, Address updatedAddress) {
        Address existingAddress = addressRepository.findById(id)
                .orElseThrow(AddressNotFoundException::new);

        existingAddress.setStreet(updatedAddress.getStreet());
        existingAddress.setNumber(updatedAddress.getNumber());
        existingAddress.setComplement(updatedAddress.getComplement());
        existingAddress.setNeighborhood(updatedAddress.getNeighborhood());
        existingAddress.setCity(updatedAddress.getCity());
        existingAddress.setState(updatedAddress.getState());
        existingAddress.setCep(updatedAddress.getCep());

        return addressRepository.save(existingAddress);
    }

    public void deleteAddress(UUID id) {
        Address address = addressRepository.findById(id)
                .orElseThrow(AddressNotFoundException::new);

        addressRepository.delete(address);
    }
}
