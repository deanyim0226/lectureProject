package com.example.gatewayservice.routes;


import com.example.gatewayservice.config.GatewayServiceConfig;
import com.example.gatewayservice.fillter.AuthFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class GatewayRouteLocator {
    private final GatewayServiceConfig config;
    private final AuthFilter authFilter;

    @Autowired
    public GatewayRouteLocator(GatewayServiceConfig config,
                               AuthFilter authFilter)
    {
        this.config = config;
        this.authFilter = authFilter;
    }

    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder builder){
        return builder.routes()
                        .route("idm",
                                r -> r.path("/idm/**")
                                        .filters(f -> f.stripPrefix(1))
                                        .uri(config.getIdm()))
                                .build();
    }
}
