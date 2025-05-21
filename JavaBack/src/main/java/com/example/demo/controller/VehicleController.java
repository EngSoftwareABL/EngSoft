package com.example.demo.controller;

import com.example.demo.model.Vehicle;
import com.example.demo.repository.VehicleRepository;

import java.util.List;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin(origins = "*")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    @PostMapping
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        // definir próxima inspeção
        Calendar proxInspecao = Calendar.getInstance();
        proxInspecao.add(Calendar.MONTH, 3);
        vehicle.setProximaInspecaoSeguranca(proxInspecao.getTime());

        // definir próxima revisão
        if (vehicle.getKm() != null) {
            float kmAtual = vehicle.getKm();
            vehicle.setProximaRevisao(kmAtual + 10000);
        }

        return vehicleRepository.save(vehicle);
    }

    @GetMapping("/verificacoes")
    public List<String> verificarAgendamentos() {
        List<Vehicle> todos = vehicleRepository.findAll();
        List<String> alertas = new ArrayList<>();

        Date hoje = new Date();
        Calendar limiteInspecao = Calendar.getInstance();
        limiteInspecao.setTime(hoje);
        limiteInspecao.add(Calendar.DAY_OF_MONTH, 10); // alerta 10 dias antes

        for (Vehicle v : todos) {
            // Inspeção
            if (v.getProximaInspecaoSeguranca() != null &&
                !v.getProximaInspecaoSeguranca().after(limiteInspecao.getTime())) {
                alertas.add("Inspeção de segurança próxima para o veículo " + v.getModelo() + " (" + v.getPlaca() + ")");
            }

            // Revisão
            if (v.getKm() != null && v.getProximaRevisao() != null) {
                float kmAtual = v.getKm();
                float kmFaltando = v.getProximaRevisao() - kmAtual;
                if (kmFaltando <= 800) {
                    alertas.add("Revisão próxima para o veículo " + v.getModelo() + " (" + v.getPlaca() + ")");
                }
            }
        }

        return alertas;
    }
}
