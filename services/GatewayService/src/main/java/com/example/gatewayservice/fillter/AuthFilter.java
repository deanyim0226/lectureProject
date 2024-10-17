package com.example.gatewayservice.fillter;

import com.example.gatewayservice.config.GatewayServiceConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Optional;

@Component
public class AuthFilter implements GatewayFilter {

    private final GatewayServiceConfig config;
    private final WebClient webClient;

    @Autowired
    public AuthFilter(GatewayServiceConfig config, WebClient.Builder webClientBuilder){
        this.config = config;
        this.webClient = webClientBuilder.build();
    }
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        getAccessTokenFromHeader(exchange);

        return null;
    }
    
    private Optional<String> getAccessTokenFromHeader(ServerWebExchange exchange){
        List<String> headers = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION);

        if(headers == null || headers.size() == 0){
            return Optional.empty();
        }

        String authHeader = headers.get(0);
        System.out.println("header is " + authHeader);


        return Optional.empty();
    }
}
