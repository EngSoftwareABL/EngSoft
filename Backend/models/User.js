const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    ID_usuário: String,
    email: String,
    nome: String,
    senha: Number,
    telefone: Number,
    depto: String
});

module.exports = mongoose.model('User', UserSchema);
