/* Importar */
const db = require('../database/models');
const User = db.User;

const op = db.Sequelize.Op;

/* Desarrollar */
const userController = {
    register : (req, res) =>{
        return res.render("registerUser");
    },
    /* Guardar un usuario*/
    store: (req, res) => {
         //return res.send('listo') 
        let info = req.body;//Guardamos los datos en un objeto
        let user = {
            name:info.name,
            email:info.email,
            password:info.password,
            //remenber_token:"false",
            //created_at:new Date(),
            //update_at:new Date(),
            //img:info.imgPerfil
        }
        console.log(user);
        /* se guarda en la DB */
        User.create(user)
        .then((result)=>{
            return res.redirect("/users/login");
        })
        .catch(error=>{
            return res.send({error:error})
        })
        
    },
    login:(req,res)=>{
        return res.render('login')
    }
}


/* Exportar */

module.exports = userController;