const estadoController = require("../controllers/estadoController");
const express = require ('express');
const api = express.Router();

api.post('/estado', estadoController.crearEstado);
api.get('/estados', estadoController.obtenerEstados);
api.put('/estado/update/:id', estadoController.actualizarEstado);
api.delete('/estado/delete/:id', estadoController.eliminarEstado);

module.exports = api;