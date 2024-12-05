package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Autorise toutes les routes
                .allowedOrigins("http://localhost:3000") // Autorise uniquement ce domaine
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Méthodes autorisées
                .allowedHeaders("*") // Autorise tous les en-têtes
                .allowCredentials(true); // Autorise les cookies et les identifiants
    }
}
