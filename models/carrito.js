const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const carritoSchema = new Schema({
    productos: {
        type: [Schema.ObjectId],
        ref: "producto"
    }
})

module.exports = mongoose.model('carrito', carritoSchema);