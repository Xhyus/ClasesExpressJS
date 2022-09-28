const categoria = require('../models/categoria');

const crearCategoria = (req, res) => {
    console.log(req.body);
    const { nombre } = req.body;
    console.log(nombre)
    const newCategoria = new categoria({
        nombre
    })
    try {
        newCategoria.save()
        console.log("paso el save")
        return res.status(201).send({ message: "Categoria creada correctamente" })
    } catch (error) {
        console.log("error")
        return res.status(400).send({ message: "No se ha podido crear la categoria" })
    }
}

const obtenerCategorias = (req, res) => {
    categoria.find({}, (err, categorias) => {
        if (err) {
            return res.status(400).send({ message: "No se han podido obtener las categorias" })
        }
        return res.status(201).send(categorias)
    })
}

const obtenerCategoria = (req, res) => {
    const { id } = req.params;
    categoria.findById(id, (err, categoria) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido obtener la categoria" })
        }
        if (!categoria) {
            return res.status(404).send({ message: "No se ha encontrado la categoria" })
        }
        return res.status(200).send(categoria)
    })
}

const actualizarCategoria = (req, res) => {
    const { id } = req.params;
    categoria.findByIdAndUpdate(id, req.body, (err, categoria) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar la categoria" })
        }
        if (!categoria) {
            return res.status(404).send({ message: "No se ha encontrado la categoria" })
        }
        return res.status(200).send(categoria)
    })
}

const eliminarCategoria = (req, res) => {
    const { id } = req.params;
    categoria.findByIdAndDelete(id, (err, categoria) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar la categoria" })
        }
        if (!categoria) {
            return res.status(404).send({ message: "No se ha encontrado la categoria" })
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