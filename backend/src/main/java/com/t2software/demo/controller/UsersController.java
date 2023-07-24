package com.t2software.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsersController {

    @GetMapping("/register")
    public String getRegisterPage(){
        return "register_page";
    }
}
