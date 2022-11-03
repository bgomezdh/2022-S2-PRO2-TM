var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', movieController.index);

router.get('/detalle/:id', movieController.show);

router.get('/busqueda', movieController.showOne);

// /* Mostrar el formulario de Movie */
router.get('/register', movieController.create)

// /* Guardar la info del formulario de movie */
router.post('/register', movieController.store )

// /**/
router.get('/update/:id',movieController.update)
router.post('/update',movieController.updatePost)
router.post('/delete/', movieController.destroy);
module.exports = router;
