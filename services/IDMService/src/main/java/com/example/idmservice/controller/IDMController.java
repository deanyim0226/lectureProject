package com.example.idmservice.controller;


import com.example.idmservice.component.IDMJwtManager;
import com.example.idmservice.domain.RefreshToken;
import com.example.idmservice.domain.User;
import com.example.idmservice.model.request.AuthenticateRequest;
import com.example.idmservice.model.request.LoginRequest;
import com.example.idmservice.model.response.LoginResponse;
import com.example.idmservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class IDMController {


    @Autowired
    UserService userService;


    @Autowired
    IDMJwtManager jwtManager;

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> register(@RequestBody User user){
        System.out.println("received user info from client " + user.getEmail());

        User existingUser = userService.findByEmail(user.getEmail());

        if(existingUser != null){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(user);
        }

        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        System.out.println("trying to login with email " + request.getEmail());
        User user = userService.findByEmail(request.getEmail());

        if(user == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(request);
        }

        if(!userService.checkUser(user, request.getPassword())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(request);
        }

        String accessToken = jwtManager.buildAccessToken(user);
        RefreshToken refreshToken = jwtManager.buildRefreshToken(user);

        String refreshTokenToString = refreshToken.getToken();

        LoginResponse response = new LoginResponse();
        response.setAccessToken(accessToken);
        response.setRefreshToken(refreshTokenToString);

        System.out.println("access token is generated  " + accessToken);
        System.out.println("refresh token is generated " + refreshTokenToString);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenicate(@RequestBody AuthenticateRequest request)
    {
        String accessToken = request.getAccessToken();

        if(accessToken.equals("") || accessToken.length() == 0){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        jwtManager.verifyAccessToken(accessToken);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntimeException(RuntimeException ex) {
        // You can return a ResponseEntity with a custom message and HTTP status code
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + ex.getMessage());
    }
}
