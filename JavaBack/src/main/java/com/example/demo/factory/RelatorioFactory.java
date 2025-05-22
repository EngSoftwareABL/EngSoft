package com.example.demo.factory;

import com.example.demo.strategy.GeradorRelatorio;
import com.example.demo.strategy.GerarRelatorioInterno;
import com.example.demo.strategy.GerarRelatorioExterno;
import org.springframework.stereotype.Component;

@Component
public class RelatorioFactory {

    private final GerarRelatorioInterno gerarRelatorioInterno;
    private final GerarRelatorioExterno gerarRelatorioExterno;

    public RelatorioFactory(GerarRelatorioInterno interno, GerarRelatorioExterno externo) {
        this.gerarRelatorioInterno = interno;
        this.gerarRelatorioExterno = externo;
    }

    public GeradorRelatorio getGerador(String tipo) {
        return switch (tipo.toLowerCase()) {
            case "interno" -> gerarRelatorioInterno;
            case "externo" -> gerarRelatorioExterno;
            default -> throw new IllegalArgumentException("Tipo de relatório inválido: " + tipo);
        };
    }
}