package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "relatorios")
public class Relatorio {
    @Id
    private String id;
    private String tipo;
    private String conteudo;

    public Relatorio() {}

    public Relatorio(String tipo, String conteudo) {
        this.tipo = tipo;
        this.conteudo = conteudo;
    }

    public String getId() {
        return id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }
}