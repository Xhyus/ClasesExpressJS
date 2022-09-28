const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categoriaSchema = new Schema({
    nombre:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('categoria', categoriaSchema);