package com.fooddelivery.fooddeliveryserver.services.impl;

import com.fooddelivery.fooddeliveryserver.Dto.request.SignUpRequest;
import com.fooddelivery.fooddeliveryserver.Dto.request.SigninRequest;
import com.fooddelivery.fooddeliveryserver.Dto.response.JwtAuthenticationResponse;
import com.fooddelivery.fooddeliveryserver.models.UserEntity;
import com.fooddelivery.fooddeliveryserver.models.enums.Role;
import com.fooddelivery.fooddeliveryserver.repository.UserRepository;
import com.fooddelivery.fooddeliveryserver.services.AuthenticationService;
import com.fooddelivery.fooddeliveryserver.services.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public JwtAuthenticationResponse signup(SignUpRequest request) {
        UserEntity user = new UserEntity();
        user.setUsername(request.getUserName());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);

        userRepository.save(user);

        var jwt = jwtService.generateToken(user);

        return JwtAuthenticationResponse.builder().token(jwt).build();
    }


    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }
}
