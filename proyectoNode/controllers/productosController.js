//importar o requerir la bd
const db = require('../db');


//obtener productos de la bd
exports.obtenerProductos = (req, res) => {
    db.query('SELECT * FROM productos', (error, resultados) =>{
        if(error){
            console.log('Error al obtener productos', error);
            res.status(500).json({error: "Error en el servidor"})
            return 
        }

        res.json({estado: 201, productos: resultados})
    })
}

//insertar producto en bd
exports.crearProducto = (req, res) => {
   const {nombre, descripcion, precio} = req.body;
   const imagen = req.file.path;

   db.query('INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)', [nombre, descripcion, precio, imagen], (err, result) =>{
    if(err){
        console.log('Error al insertar producto', err);
        res.status(500).json({error: "Error en el servidor"})
        return
    }
    res.json({estado: 201, mensaje: "Producto guardado exitosamente"})

   })

}