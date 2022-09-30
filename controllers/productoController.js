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

const actualizarProducto = (req, res) => {
    const {id} = req.params;
    producto.findByIdAndUpdate(id, req.body, (err, producto) => {
        if(err){
            return res.status(400).send({message: "No se han podido modificar los productos"})
        }
        if(!producto){
            return res.status(404).send({message: "No se ha encontrado los productos"})
        }
        return res.status(200).send(producto)
    })
}

const eliminarProducto = (req,res) => {
    const {id} = req.params;
    producto.findByIdAndDelete(id, (err, producto) => {
        if(err){
            return res.status(400).send({message: "No se han podido eliminar el producto"})
        }
        if(!producto){
            return res.status(404).send({message: "No se ha eliminado el usuario"})
        }
        return res.status(200).send(producto)
    })
}


module.exports = {
    crearProducto,
    obtenerProductos,
    actualizarProducto,
    eliminarProducto
}