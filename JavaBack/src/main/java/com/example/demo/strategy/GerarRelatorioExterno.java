package com.example.demo.strategy;

import org.springframework.stereotype.Component;

@Component
public class GerarRelatorioExterno implements GeradorRelatorio {
    @Override
    public String gerar() {
        return "Relatório Externo Gerado";
    }
}