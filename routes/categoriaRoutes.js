const categoriaController = require('../controllers/categoriaController');
const express = require('express');
const api = express.Router();

api.post('/categoria', categoriaController.crearCategoria);
api.get('/categorias', categoriaController.obtenerCategorias);
api.get('/categoria/:id', categoriaController.obtenerCategoria);
api.put('/categoria/update/:id', categoriaController.actualizarCategoria);
api.delete('/categoria/delete/:id', categoriaController.eliminarCategoria)

module.exports = api;