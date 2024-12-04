package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable() // Désactive CSRF (utile pour Postman)
                .authorizeHttpRequests()
                .anyRequest().permitAll(); // Permet l'accès à tous les endpoints sans authentification
        return http.build();
    }

}
