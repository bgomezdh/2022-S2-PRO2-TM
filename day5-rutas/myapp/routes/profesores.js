/* Es traer el modulo express */
let express = require('express');
let router = express.Router();

/* Buscar todos los profesores en unas lista */

/* Escribimos los sufijos */

const profesoresController = require('../controllers/profesoresController')

router.get("/index", profesoresController.index);

/*                   brian */
router.get('/nombre/:nombre?', profesoresController.buscarPorNombre)


module.exports = router;

