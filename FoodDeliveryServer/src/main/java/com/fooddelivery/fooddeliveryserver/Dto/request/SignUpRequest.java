package com.fooddelivery.fooddeliveryserver.Dto.request;

import com.fooddelivery.fooddeliveryserver.models.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignUpRequest {
    private String userName;
    private String password;
}
