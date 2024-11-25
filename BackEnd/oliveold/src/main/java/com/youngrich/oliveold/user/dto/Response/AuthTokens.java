package com.youngrich.oliveold.user.dto.Response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AuthTokens {

    private String accessToken;
    private String refreshToken;
    private String grantType;
    private Long expires;

    public static AuthTokens of(String accessToken, String refreshToken, String grantType, Long expires) {
        return new AuthTokens(accessToken, refreshToken, grantType, expires);
    }
}
