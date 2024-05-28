const express = require('express');
const router = express.Router();
const multer = require('multer');
const productosController = require('../controllers/productosController')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        //imagen1.png
        //['imagen1', 'png']
      const ext = file.originalname.split('.').pop() //ext = png
      cb(null, `${Date.now()}.${ext}`)
      //42434532.png
    }
  })
  
const upload = multer({ storage: storage })


router.get('/productos/listar', productosController.obtenerProductos);
router.post('/productos/crear',upload.single('imagen'), productosController.crearProducto)

module.exports = router;