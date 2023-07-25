package com.t2software.demo.controller;


import ch.qos.logback.core.model.Model;
import com.t2software.demo.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class UsersController {

    @GetMapping("/register") //"/register" URL'sine GET isteği geldiğinde çalışacak olan metot
    public String getRegisterPage(Model model){

        return "register_page";
    }

    @GetMapping("/login")
    public String getLoginPage(Model model){
        return "login_page";
    }



}
