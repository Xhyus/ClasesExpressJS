const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const productoRoutes = require('./routes/productoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

const app = express()
app.use(cors())
app.use(express.json())
app.options('*', cors())
app.use('/api', productoRoutes)
app.use('/api', categoriaRoutes)

const options = {
    useNewUrlParser: true,
    autoIndex: true,
    keepAlive: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB, options, function (error) {
    if (error) {
        console.log(error)
    }
    console.log("Se ha conectado de forma correcta a la base de datos")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

module.exports = app;