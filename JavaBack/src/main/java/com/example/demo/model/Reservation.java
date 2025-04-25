package com.example.demo.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reservas")
public class Reservation {
    @Id
    private String id;

    private String idUsuario;
    private String idVeiculo;
    private Date dataInicio;
    private Date dataFim;
    private String tipoUso;

    //getters e setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getIdUsuario() {
        return idUsuario;
    }
    public void setIdUsuario(String idUsuario) {
        this.idUsuario = idUsuario;
    }
    public String getIdVeiculo() {
        return idVeiculo;
    }
    public void setIdVeiculo(String idVeiculo) {
        this.idVeiculo = idVeiculo;
    }
    public Date getDataInicio() {
        return dataInicio;
    }
    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }
    public Date getDataFim() {
        return dataFim;
    }
    public void setDataFim(Date dataFim) {
        this.dataFim = dataFim;
    }

    public String getTipoUso() {
    return tipoUso;
    }
    public void setTipoUso(String tipoUso) {
    this.tipoUso = tipoUso;
    }
}