const express = require('express');
const router = express.Router();
const Veiculo = require('../models/Vehicle');

// GET - listar todos os veículos
router.get('/', async (req, res) => {
    try {
        const veiculos = await Veiculo.find();
        res.json(veiculos);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// POST - cadastrar novo veículo
router.post('/', async (req, res) => {
    try {
        const novo = new Veiculo(req.body);
        await novo.save();
        res.status(201).json(novo);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
});

module.exports = router;
