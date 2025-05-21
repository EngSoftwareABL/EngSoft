package com.example.demo.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vehicles")
public class Vehicle {
    @Id
    private String id_veiculo;
    private String modelo;
    private String placa;
    private Date manut;
    private Float km;
    private Disponibilidade status = Disponibilidade.D;
    private List<String> disponibilidade;
    private Float proximaRevisao;
    private Date proximaInspecaoSeguranca;

    //getters e setters
    public List<String> getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(List<String> disponibilidade) {
        this.disponibilidade = disponibilidade;
    }
    public String getId_veiculo() {
        return id_veiculo;
    }
    public void setId_veiculo(String id_veiculo) {
        this.id_veiculo = id_veiculo;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public String getPlaca() {
        return placa;
    }
    public void setPlaca(String placa) {
        this.placa = placa;
    }
    public Date getManut() {
        return manut;
    }
    public void setManut(Date manut) {
        this.manut = manut;
    }
    public Float getKm() {
        return km;
    }
    public void setKm(Float km) {
        this.km = km;
    }
    public Disponibilidade getStatus() {
        return status;
    }
    public void setStatus(Disponibilidade status) {
        this.status = status;
    }
    
    public Float getProximaRevisao() {
        return proximaRevisao;
    }
    
    public void setProximaRevisao(Float proximaRevisao) {
        this.proximaRevisao = proximaRevisao;
    }
    
    public Date getProximaInspecaoSeguranca() {
        return proximaInspecaoSeguranca;
    }
    
    public void setProximaInspecaoSeguranca(Date proximaInspecaoSeguranca) {
        this.proximaInspecaoSeguranca = proximaInspecaoSeguranca;
    }    
}


