const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        enum: [
            "admin",
            "user"
        ],
        default: "user"
    },
    carrito: {
        type: Schema.ObjectId,
        ref: "carrito"
    }
})

module.exports = mongoose.model('usuario', usuarioSchema);