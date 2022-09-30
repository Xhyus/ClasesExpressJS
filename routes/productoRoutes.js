const productoController = require("../controllers/productoController");
const express = require ('express');
const api = express.Router();

api.post('/producto', productoController.crearProducto);
api.get('/productos', productoController.obtenerProductos);
api.put('/producto/update/:id', productoController.actualizarProducto);
api.delete('/producto/delete/:id', productoController.eliminarProducto);

module.exports = api;