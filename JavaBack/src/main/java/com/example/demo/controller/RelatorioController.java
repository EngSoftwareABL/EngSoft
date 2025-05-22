package com.example.demo.controller;

import com.example.demo.service.RelatorioService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/relatorios")
public class RelatorioController {

    private final RelatorioService relatorioService;

    public RelatorioController(RelatorioService service) {
        this.relatorioService = service;
    }

    @GetMapping("/{tipo}")
    public String gerar(@PathVariable String tipo) {
        return relatorioService.gerarRelatorio(tipo);
    }
}