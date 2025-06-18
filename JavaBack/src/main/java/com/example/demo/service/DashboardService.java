package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Disponibilidade;
//import com.example.demo.repository.ReservationRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.VehicleRepository;
import com.example.demo.strategy.DashboardResumo;

@Service
public class DashboardService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private UserRepository userRepository;

    //@Autowired
    //private ReservationRepository reservaRepository;

    public DashboardResumo gerarResumo() {
        long veiculosOciosos = vehicleRepository.countByStatus(Disponibilidade.D);
        long motoristasOciosos = userRepository.countByDisponivelTrue();

        // Exemplo simples de cálculo
        long totalVeiculos = vehicleRepository.count();
        long veiculosEmUso = totalVeiculos - veiculosOciosos;
        double percentualUtilizacao = totalVeiculos > 0 ?
            (double) veiculosEmUso / totalVeiculos * 100 : 0;

        String recomendacao = veiculosOciosos > 0
            ? "Agendar reservas para veículos disponíveis"
            : "Todos os veículos estão sendo utilizados";

        return new DashboardResumo(
            veiculosOciosos,
            motoristasOciosos,
            recomendacao,
            percentualUtilizacao
        );
    }
}

