package com.t2software.demo.controller;


import com.t2software.demo.model.UsersModel;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.ui.Model;

@Controller
public class UsersController {

    @GetMapping("/register")
    public String getRegisterPage(){
        return "register_page";
    }

   /* @GetMapping("/login")
    public String getLoginPage(Model model){
        return "login_page";
    }

    @PostMapping("/register")
    public String register( )*/
}
