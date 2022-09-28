const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categoriaSchema = new Schema({
    nombre:{
        type: "string",
        require: true
    }
})

module.exports = mongoose.model('categoria', categoriaSchema);