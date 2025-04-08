package com.example.demo.controller;

import com.example.demo.model.Reservation;
import com.example.demo.repository.ReservationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reserva")
@CrossOrigin(origins = "*")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping
    public List<Reservation> getAllReservas() {
        return reservationRepository.findAll();
    }

    @PostMapping
    public Reservation createReserva(@RequestBody Reservation reserva) {
        return reservationRepository.save(reserva);
    }
}
