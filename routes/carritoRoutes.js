const carritoController = require("../controllers/carritoController");
const express = require ('express');
const api = express.Router();

api.post('/carrito', carritoController.crearCarrito);
api.get('/carritos', carritoController.obtenerCarritos);
api.put('/carrito/update/:id', carritoController.actualizarCarrito);
api.delete('/carrito/delete/:id', carritoController.eliminarCarrito);

module.exports = api;