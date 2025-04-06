const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get("/", async (req, res) => {
    try {
        let resposta = await User.find();
        return res.json(resposta);
    } catch (err) {
        return res.status(500).json({ erro: err.message });
    }
});

// POST create user
router.post("/", async (req, res) => {
    const { ID_usuário, email, nome, senha, telefone, depto } = req.body;

    const novoUsuario = new User({
        ID_usuário,
        email,
        nome,
        senha,
        telefone,
        depto
    });

    try {
        await novoUsuario.save();
        console.log("Usuario salvo no banco com sucesso!");
        return res.status(201).json({
            mensagem: "Usuario adicionado com sucesso!",
            user: novoUsuario
        });
    } catch (err) {
        console.error("Erro ao salvar usuário:", err);
        return res.status(500).json({ mensagem: "Erro ao salvar usuário", erro: err });
    }
});

module.exports = router;
