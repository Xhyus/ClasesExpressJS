const productoController = require("../controllers/productoController");
const express = require ('express');
const api = express.Router();

api.post('/producto', productoController.crearProducto);
api.get('/productos', productoController.obtenerProductos);

module.exports = api;