const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
       type: Schema.ObjectId,
        ref: "categoria",
    },
    estado: {
        type: Schema.ObjectId,
        ref: "estado"
    }
})

module.exports = mongoose.model('producto', productoSchema);