const VehicleDAO = require('../dao/VehicleDAO');

exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await VehicleDAO.getAllVehicles();
        res.json(vehicles);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar veículos' });
    }
};

exports.createVehicle = async (req, res) => {
    try {
        const newVehicle = await VehicleDAO.createVehicle(req.body);
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar veículo' });
    }
};
