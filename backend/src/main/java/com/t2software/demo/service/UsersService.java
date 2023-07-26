package com.t2software.demo.service;

import com.t2software.demo.model.User;
import com.t2software.demo.repository.UsersRepository;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }
    public User registerUser(String login, String password, String email) {
        if ( login != null && password != null ) {
            User usersModel = new User();

            usersModel.setEmail(email);
            return usersRepository.save(usersModel);
        } else {
            System.out.println("hata var asko");
            System.out.println("hatayı coz ");
            return null;
        }
    }

    public User authenticate(String login, String password) {
        return null;
        //return usersRepository.findByLoginAndPassword(login, password).orElse(null);
    }
}
