//Importar el modulo de express
const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productosRoutes')


//Crear instancia de una app de express
const app = express();
app.use(cors())
app.use(express.json());


app.use('/uploads', express.static('uploads'));

app.use('/api', productosRoutes);

//establecer el puerto en el que se ejecuta el servidor Express
app.listen(3000,() =>{
    console.log("Servidor en el puerto 3000")
});