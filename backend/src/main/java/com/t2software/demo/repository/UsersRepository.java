package com.t2software.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<UsersModel, Integer> {
    Optional<UsersModel> findByLoginAndPassword(String login, String password);

}
