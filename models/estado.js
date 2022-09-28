const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const estadoSchema = new Schema({
    disponible: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('estado', estadoSchema);