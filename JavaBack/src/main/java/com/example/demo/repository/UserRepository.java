package com.example.demo.repository;

import com.example.demo.model.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmailAndSenha(String email, String senha);
    Optional<User> findByEmail(String email);

    List<User> findByPerfil(String perfil);
}
