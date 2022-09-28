const estado = require('../models/estado');

const crearEstado = (req,res) =>{
    const {disponible} = req.body;
    const newEstado = new estado({
        disponible
    })
    try{
        newEstado.save()
        return res.status(201).json({
            message: "Estado creado correctamente"
        })

    } catch(error) {
        return res.status(400).json({
            message: "No se ha podido crear el estado"
        })
    }
}

const obtenerEstados = (req,res) =>{
    estado.find({},(err, estado) => {
        if(err){
            return res.status(400).send({message: "No se han podido obtener los estados"})
        }
        return res.status(200).send(estado)
    })
}


const actualizarEstado = (req, res) => {
    const {id} = req.params;
    estado.findByIdAndUpdate(id, req.body, (err, estado) => {
        if(err){
            return res.status(400).send({message: "No se han podido modificar los estados"})
        }
        if(!estado){
            return res.status(404).send({message: "No se ha encontrado los estados"})
        }
        return res.status(200).send(estado)
    })
}

const eliminarEstado = (req,res) => {
    const {id} = req.params;
    estado.findByIdAndDelete(id, (err, estado) => {
        if(err){
            return res.status(400).send({message: "No se han podido eliminar el estado"})
        }
        if(!estado){
            return res.status(404).send({message: "No se ha eliminado el estado"})
        }
        return res.status(200).send(estado)
    })
}

module.exports = {
    crearEstado,
    obtenerEstados,
    actualizarEstado,
    eliminarEstado
}   