/*package com.example.demo.controller;

import com.example.demo.model.Disponibilidade;
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

    @Autowired
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
                veiculo.setStatus(Disponibilidade.R); // ++ status 'R' = Reservado | já alterado para novo modelo da dado
                vehicleRepository.save(veiculo); // ++ salva a atualização
        }
    
        return reservationRepository.save(reserva);
    } 
}*/

package com.example.demo.controller;

import com.example.demo.model.Disponibilidade;
import com.example.demo.model.Reservation;
import com.example.demo.repository.ReservationRepository;
import com.example.demo.model.Vehicle;
import com.example.demo.repository.VehicleRepository;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reserva")
@CrossOrigin(origins = "*")
public class ReservationController {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping
    public List<Reservation> getAllReservas() {
        return reservationRepository.findAll();
    }

    @PostMapping
    public Reservation createReserva(@RequestBody Reservation reserva) {
    // Salva a reserva
    Reservation savedReserva = reservationRepository.save(reserva);

    // Busca o veículo relacionado
    Optional<Vehicle> optionalVehicle = vehicleRepository.findById(reserva.getIdVeiculo());

    if (optionalVehicle.isPresent()) {
        Vehicle vehicle = optionalVehicle.get();
        vehicle.setStatus(Disponibilidade.R); // ou Enum se for o caso
        vehicleRepository.save(vehicle);
    } else {
        // Trate o caso de veículo não encontrado, se necessário
        throw new RuntimeException("Veículo não encontrado com ID: " + reserva.getIdVeiculo());
    }

    return savedReserva;
} 
}
