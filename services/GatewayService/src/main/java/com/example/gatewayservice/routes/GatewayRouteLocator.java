package com.example.gatewayservice.routes;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class GatewayRouteLocator {


    @Autowired
    public GatewayRouteLocator(){

    }

    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder builder){



        return builder.routes()
                        .route("idm",
                                r -> r.path("/idm/**")
                                        .filters(f -> f.stripPrefix(1))
                                        .uri(""))
                                .build();
    }
}
