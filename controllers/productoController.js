const producto = require('../models/producto');

const crearProducto = async (req,res) =>{
    const {nombre,precio,cantidad,descripcion,categoria,estado} = req.body;
    const newProducto = new producto({
        nombre,
        precio,
        cantidad,
        descripcion,
        categoria,
        estado
    })
    try{
        await newProducto.save();
        return res.status(201).json({
            message: "Producto creado correctamente"
        })
    }catch(error){
        return res.status(400).json({
            message: "No se ha podido crear el producto"
        })
    }
}

const obtenerProductos = async(req, res) => {
    producto.find({},(err, productos) => {
        if(err){
            return res.status(400).send({message: "No se han podido obtener los productos"})
        }
        return res.status(200).send(productos)
    })
}

module.exports = {
    crearProducto,
    obtenerProductos
}