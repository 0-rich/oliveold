package com.youngrich.oliveold.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class AuthenticationConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .httpBasic(httpBasic -> httpBasic.disable()) // HTTP Basic 인증 비활성화
                .csrf(csrf -> csrf.disable())               // CSRF 보호 비활성화
                .cors(cors -> cors.configure(http))         // CORS 활성화
                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/**").permitAll()          // 특정 경로 허용
                        .requestMatchers("/api/users/kakao/login").permitAll()          // 특정 경로 허용
                        .requestMatchers(HttpMethod.POST, "/api/**").authenticated() // POST 요청 인증
                        .requestMatchers(HttpMethod.PUT, "/api/**").authenticated()  // PUT 요청 인증
                        .requestMatchers(HttpMethod.DELETE, "/api/**").authenticated() // DELETE 요청 인증
                        .anyRequest().authenticated()                               // 그 외 모든 요청 인증 필요
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)    // 세션 사용 비활성화
                )
                .build();
    }
}
