package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Vehicle;

public interface VehicleRepository extends MongoRepository<Vehicle, String> {
    
}
