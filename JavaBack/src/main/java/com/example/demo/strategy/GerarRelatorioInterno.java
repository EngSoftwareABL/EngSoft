package com.example.demo.strategy;

import org.springframework.stereotype.Component;

@Component
public class GerarRelatorioInterno implements GeradorRelatorio {
    @Override
    public String gerar() {
        return "Relatório Interno Gerado";
    }
}