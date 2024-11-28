package com.youngrich.oliveold.user.Response;

import com.youngrich.oliveold.domain.LoginType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDto {

    private Long id;
    private String email;
    private String nickname;
    private AuthTokens token;

}
