package com.example.demo.controller;

import com.example.demo.model.Reservation;
import com.example.demo.repository.ReservationRepository;
import com.example.demo.model.Vehicle;
import com.example.demo.repository.VehicleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reserva")
@CrossOrigin(origins = "*")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;
    private VehicleRepository vehicleRepository;

    @GetMapping
    public List<Reservation> getAllReservas() {
        return reservationRepository.findAll();
    }

    @PostMapping
    public Reservation createReserva(@RequestBody Reservation reserva) {
        
        Reservation savedReserva = reservationRepository.save(reserva); // ++ salva a reserva
    
        
        Vehicle veiculo = vehicleRepository.findById(reserva.getIdVeiculo()).orElse(null); // ++ busca veh pelo ID
    
        if (veiculo != null) {  // ++ mudar status para 'R' quando acha o ID
            veiculo.setStatus('R'); // ++ status 'R' = Reservado
            vehicleRepository.save(veiculo); // ++ salva a atualização
        }
    
        return savedReserva;
    } 
}
