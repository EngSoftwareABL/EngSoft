const ReservationDAO = require('../dao/ReservationDAO');

exports.getReservations = async (req, res) => {
    try {
        const reservations = await ReservationDAO.getAllReservations();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar reservas' });
    }
};

exports.createReservation = async (req, res) => {
    try {
        const newReservation = await ReservationDAO.createReservation(req.body);
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar reserva' });
    }
};
