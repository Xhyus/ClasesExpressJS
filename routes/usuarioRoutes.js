const usuarioController = require("../controllers/usuarioController");
const express = require ('express');
const api = express.Router();

api.post('/usuario', usuarioController.crearUsuario);
api.get('/usuarios', usuarioController.obtenerUsuario);
api.put('/usuario/update/:id', usuarioController.actualizarUsuario);
api.delete('/usuario/delete/:id', usuarioController.eliminarUsuario);

module.exports = api;