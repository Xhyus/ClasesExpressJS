const carrito = require('../models/carrito');

const crearCarrito = async (req,res) =>{
    const {productos} = req.body;
    const newCarrito = new carrito({
        productos
    })
    try{
        await newCarrito.save();
        return res.status(201).json({
            message: "Carrito creado correctamente"
        })
    }catch(error){
        return res.status(400).json({
            message: "No se ha podido crear el carrito"
        })
    }
}

const obtenerCarritos = (req, res) => {
    carrito.find({},(err, carrito) => {
        if(err){
            return res.status(400).send({message: "No se han podido obtener los carritos"})
        }
        return res.status(200).send(carrito)
    })
}

const actualizarCarrito = (req, res) => {
    const {id} = req.params;
    carrito.findByIdAndUpdate(id, req.body, (err, carrito) => {
        if(err){
            return res.status(400).send({message: "No se han podido modificar los carritos"})
        }
        if(!carrito){
            return res.status(404).send({message: "No se ha encontrado los carritos"})
        }
        return res.status(200).send(carrito)
    })
}

const eliminarCarrito = (req,res) => {
    const {id} = req.params;
    carrito.findByIdAndDelete(id, (err, carrito) => {
        if(err){
            return res.status(400).send({message: "No se han podido eliminar el carrito"})
        }
        if(!carrito){
            return res.status(404).send({message: "No se ha eliminado el carrito"})
        }
        return res.status(200).send(carrito)
    })
}


module.exports = {
    crearCarrito,
    obtenerCarritos,
    actualizarCarrito,
    eliminarCarrito
}
