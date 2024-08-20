package com.example.idmservice.controller;


import com.example.idmservice.domain.User;
import com.example.idmservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {


    @Autowired
    UserService userService;



}
