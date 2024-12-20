package com.fooddelivery.fooddeliveryserver.services;

import com.fooddelivery.fooddeliveryserver.Dto.request.SignUpRequest;
import com.fooddelivery.fooddeliveryserver.Dto.request.SigninRequest;
import com.fooddelivery.fooddeliveryserver.Dto.response.JwtAuthenticationResponse;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}
