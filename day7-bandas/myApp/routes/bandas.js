var express = require('express');
var router = express.Router();

const bandasController = require('../controllers/bandasController')

/* GET home page. */
router.get('/lista', bandasController.index );

router.get('/id/:id', bandasController.buscarPorId);

router.get('/generos/:genero', bandasController.buscarPorGenero);

module.exports = router;


