package com.example.demo.repository;

import com.example.demo.model.Relatorio;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RelatorioRepository extends MongoRepository<Relatorio, String> {
}