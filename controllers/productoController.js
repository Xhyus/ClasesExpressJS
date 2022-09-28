const producto = require('../models/producto');

const crearProducto = (req, res) => {
    const { nombre, precio, cantidad, descripcion, categoria } = req.body;
    const newProducto = new producto({
        nombre,
        precio,
        cantidad,
        descripcion,
        categoria
    })
    try {
        newProducto.save();
        res.status(201).json({
            message: "Producto creado correctamente"
        })
    }
    catch (error) {
        res.status(400).json({
            message: "No se ha podido crear el producto"
        })
    }
}

const obtenerProductos = (req, res) => {
    producto.find({}, (err, productos) => {
        if (err) {
            return res.status(400).send({ message: "No se han podido obtener los productos" })
        }
        return res.status(200).send(productos)
    })
}

module.exports = {
    crearProducto,
    obtenerProductos
}