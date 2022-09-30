const usuario = require('../models/usuario');

const crearUsuario = async (req,res) =>{
    const {nombre,apellido,email,password,rol,carrito} = req.body;
    const newUsuario = new usuario({
        nombre,
        apellido,
        email,
        password,
        rol,
        carrito
    })
    try{
        await newUsuario.save();
        return res.status(201).json({
            message: "Usuario creado correctamente"
        })
    }catch(error){
        return res.status(400).json({
            message: "No se ha podido crear el usuario"
        })
    }
}

const obtenerUsuario = async(req, res) => {
    usuario.find({},(err, usuarios) => {
        if(err){
            return res.status(400).send({message: "No se han podido obtener los usuarios"})
        }
        return res.status(200).send(usuarios)
    })
}

const actualizarUsuario = (req, res) => {
    const {id} = req.params;
    usuario.findByIdAndUpdate(id, req.body, (err, usuario) => {
        if(err){
            return res.status(400).send({message: "No se han podido modificar los usuarios"})
        }
        if(!usuario){
            return res.status(404).send({message: "No se ha encontrado los estados"})
        }
        return res.status(200).send(usuario)
    })
}

const eliminarUsuario = (req,res) => {
    const {id} = req.params;
    usuario.findByIdAndDelete(id, (err, usuario) => {
        if(err){
            return res.status(400).send({message: "No se han podido eliminar el usuario"})
        }
        if(!usuario){
            return res.status(404).send({message: "No se ha eliminado el usuario"})
        }
        return res.status(200).send(usuario)
    })
}

module.exports = {
    crearUsuario,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
}