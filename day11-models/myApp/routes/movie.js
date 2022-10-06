var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', movieController.index);

router.get('/detalle/:id', movieController.show);

router.get('/busqueda', movieController.showOne);

module.exports = router;
