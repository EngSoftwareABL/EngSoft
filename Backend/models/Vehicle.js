const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    model: String,
    plate: String,
    maintenance: Date,
    mileage: Number,
    status: String
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
