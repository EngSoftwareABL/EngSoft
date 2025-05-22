package com.example.demo.service;

import com.example.demo.factory.RelatorioFactory;
import com.example.demo.strategy.GeradorRelatorio;
import org.springframework.stereotype.Service;

@Service
public class RelatorioServiceImpl implements RelatorioService {

    private final RelatorioFactory relatorioFactory;

    public RelatorioServiceImpl(RelatorioFactory factory) {
        this.relatorioFactory = factory;
    }

    @Override
    public String gerarRelatorio(String tipo) {
        GeradorRelatorio gerador = relatorioFactory.getGerador(tipo);
        return gerador.gerar();
    }
}