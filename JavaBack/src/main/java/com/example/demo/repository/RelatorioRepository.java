package com.example.demo.repository;

import com.example.demo.model.Relatorio;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RelatorioRepository extends MongoRepository<Relatorio, String> {
    // métodos adicionais de busca personalizados podem ser definidos aqui
}
