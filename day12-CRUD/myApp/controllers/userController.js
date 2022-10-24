/* Importar */
const db = require('../database/models');
const User = db.User;
const bycript = require('bcryptjs');
const op = db.Sequelize.Op;

/* Desarrollar */
const userController = {
   
    /* Mostrar el form de la peli */
    create : (req, res) =>{
        return res.render("registerUser");
    },
    /* Guardar una peli */
    store: (req, res) => {
        /* return res.send(req.body) */
        let usuarioAGuardar = req.body;
        /* luego la tengo que guardar en la DB */
        let user ={
            name:usuarioAGuardar.name,
            email:usuarioAGuardar.email,
            password:bycript.hashSync(usuarioAGuardar.password,10)
        }
        User.create(user)
        .then((result)=>{
            return res.redirect('/users/login')
        })
        .catch((err)=>{
            return console.log(err)
        })
        
    },
    login:(req,res)=>{
        return res.render('login')
    },
    loginPost:(req,res)=>{
        let info = req.body;
        let filtro={
            where:[{email:info.email}]
        }
        User.findOne(filtro)
        .then((result)=>{
            if(result!=null){
                let passEncriptada= bycript.compareSync(info.password,result.password);
                if(passEncriptada){
                    return res.redirect('/movies')
                }else{
                    return res.send('La clave no coincide')
                }
            }
        })
        .catch(error=>console.log(error))
       
    }


}


/* Exportar */

module.exports = userController;