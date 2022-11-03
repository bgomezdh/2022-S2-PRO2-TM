var express = require('express');
var router = express.Router();
const userController=require('../controllers/userController')

/* dos modulos importantes para cargar archivos */
let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usuarios'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});


/* GET users listing. */
router.get('/register', userController.create);
router.post('/register', upload.single('imgPerfil'), userController.store);
router.get('/login',userController.login);
router.post('/login',userController.loginPost)

router.get('/logout',userController.logout);
module.exports = router;
