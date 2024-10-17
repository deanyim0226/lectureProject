package com.example.gatewayservice.config;


import org.springframework.boot.context.properties.ConfigurationProperties;

import java.net.URI;
import java.net.URISyntaxException;

@ConfigurationProperties(prefix = "gateway")
public class GatewayServiceConfig {

    private final URI idm;
    private final URI  idmAuthenticate;
    private final Long maxLogs;

    public GatewayServiceConfig(String idm,
                                String authenticatePath,
                                Long maxLogs)
            throws URISyntaxException
    {
        this.idm = new URI(idm);
        this.idmAuthenticate = new URI(idm + authenticatePath);
        this.maxLogs = maxLogs;
    }

    public URI getIdm()
    {
        return idm;
    }

    public URI getIdmAuthenticate()
    {
        return idmAuthenticate;
    }

    public Long getMaxLogs()
    {
        return maxLogs;
    }
}
