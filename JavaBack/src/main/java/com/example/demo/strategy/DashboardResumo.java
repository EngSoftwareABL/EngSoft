package com.example.demo.strategy;

public class DashboardResumo {
    private long veiculosOciosos;
    private long motoristasOciosos;
    private String recomendacaoReserva;
    private double percentualUtilizacao;

    public DashboardResumo(long veiculosOciosos, long motoristasOciosos,
                           String recomendacaoReserva, double percentualUtilizacao) {
        this.veiculosOciosos = veiculosOciosos;
        this.motoristasOciosos = motoristasOciosos;
        this.recomendacaoReserva = recomendacaoReserva;
        this.percentualUtilizacao = percentualUtilizacao;
    }

    public long getVeiculosOciosos() {
        return veiculosOciosos;
    }

    public void setVeiculosOciosos(long veiculosOciosos) {
        this.veiculosOciosos = veiculosOciosos;
    }

    public long getMotoristasOciosos() {
        return motoristasOciosos;
    }

    public void setMotoristasOciosos(long motoristasOciosos) {
        this.motoristasOciosos = motoristasOciosos;
    }

    public String getRecomendacaoReserva() {
        return recomendacaoReserva;
    }

    public void setRecomendacaoReserva(String recomendacaoReserva) {
        this.recomendacaoReserva = recomendacaoReserva;
    }

    public double getPercentualUtilizacao() {
        return percentualUtilizacao;
    }

    public void setPercentualUtilizacao(double percentualUtilizacao) {
        this.percentualUtilizacao = percentualUtilizacao;
    }

    
}
