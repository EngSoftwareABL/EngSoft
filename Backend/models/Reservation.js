const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
    startDate: Date,
    endDate: Date,
    status: String
});

module.exports = mongoose.model('Reservation', ReservationSchema);
