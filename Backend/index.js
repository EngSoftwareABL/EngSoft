const express = require('express')
const userRoutes = require('./controllers/userController')
const vehicleRoutes = require('./controllers/vehicleController')
const mongoose = require("mongoose")

const porta = 8080

const app = express()
app.use(express.json())

app.use("/user", userRoutes)
app.use("/vehicle", vehicleRoutes)

mongoose.connect("mongodb+srv://leobrazfonseca24:engsoft123@bancosusersvehicles.1xmlgou.mongodb.net/")
.then( () => {
    app.listen(porta, () => {
        console.log("Banco de dados conectado com")
        console.log(`Servidor rodando em http://localhost:${porta}`)
    })
})
.catch( (err) => {
    console.log(err)
} )