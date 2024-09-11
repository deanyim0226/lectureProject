package com.example.idmservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
<<<<<<< HEAD

        registry.addMapping("/**")
                .allowedOrigins("http://localhost:9091") // Allow requests from your client
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
        //WebMvcConfigurer.super.addCorsMappings(registry);
=======
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:9091")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);

>>>>>>> 1a2f9fa (add login and register apis)
    }
}
