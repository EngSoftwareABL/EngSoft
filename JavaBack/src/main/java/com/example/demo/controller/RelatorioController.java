package com.example.demo.controller;

import com.example.demo.model.Relatorio;
import com.example.demo.repository.RelatorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/relatorios")
@CrossOrigin(origins = "http://localhost:4200")
public class RelatorioController {

    @Autowired
    private RelatorioRepository repository;

    @GetMapping
    public List<Relatorio> listarRelatorios() {
        return repository.findAll();
    }

    @PostMapping
    public Relatorio criarRelatorio(@RequestBody Relatorio relatorio) {
        return repository.save(relatorio);
    }

    @GetMapping("/{id}")
    public Relatorio obterRelatorioPorId(@PathVariable String id) {
        return repository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deletarRelatorio(@PathVariable String id) {
        repository.deleteById(id);
    }
}
