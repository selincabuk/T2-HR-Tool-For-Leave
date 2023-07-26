package com.t2software.demo.repository;

import com.t2software.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UsersRepository extends JpaRepository<User, UUID> {
    //Optional<User> findByLoginAndPassword(String login, String password);
    User findByUsername(String username);

}
