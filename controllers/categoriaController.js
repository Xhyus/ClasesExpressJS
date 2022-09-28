const categoria = require('../models/categoria');

const crearCategoria = (req,res) =>{
    const {nombre} = req.body;
    const newCategoria = new categoria({
        nombre
    })
    try{
        newCategoria.save()
        return res.status(201).json({
            message: "Categoria creado correctamente"
        })

    } catch(error) {
        return res.status(400).json({
            message: "No se ha podido crear la categoria"
        })
    }
}

const obtenerCategorias = (req, res) => {
    categoria.find({},(err, categoria) => {
        if(err){
            return res.status(400).send({message: "No se han podido obtener las categorias"})
        }
        return res.status(200).send(categoria)
    })
}

const obtenerCategoria = (req, res) => {
    const {id} = req.params;
    categoria.findById(id,(err, categoria) => {
        if(err){
            return res.status(400).send({message: "No se han podido obtener las categorias"})
        }
        if(!categoria){
            return res.status(404).send({message: "No se ha encontrado las categorias"})
        }
        return res.status(200).send(categoria)
    })
}

const actualizarCategoria = (req, res) => {
    const {id} = req.params;
    categoria.findByIdAndUpdate(id, req.body, (err, categoria) => {
        if(err){
            return res.status(400).send({message: "No se han podido modificar las categorias"})
        }
        if(!categoria){
            return res.status(404).send({message: "No se ha encontrado las categorias"})
        }
        return res.status(200).send(categoria)
    })
}

const eliminarCategoria = (req,res) => {
    const {id} = req.params;
    categoria.findByIdAndDelete(id, (err, categoria) => {
        if(err){
            return res.status(400).send({message: "No se han podido eliminar la categoria"})
        }
        if(!categoria){
            return res.status(404).send({message: "No se ha eliminado las categoria"})
        }
        return res.status(200).send(categoria)
    })
}

module.exports = {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actualizarCategoria,
    eliminarCategoria
}
