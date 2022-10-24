/* Importar */
const db = require('../database/models');
const User = db.User;
/* Requerir mi modulo instalado controller de user*/
const bcrypt = require('bcryptjs');
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
            password:bcrypt.hashSync(info.password, 10), 
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
    },
    loginPost:(req,res)=>{
        let info=req.body;
        let filtro = {
            where:[{email:req.body.email}]
        }
        User.findOne(filtro)        
   .then((result) => {                        
           if (result != null) {
                    let passEncriptada = bcrypt.compareSync(info.password , result.password)                
                    if (passEncriptada) {                    
                         return res.redirect("/movies")                
                    } else {                    
                        return res.send("Existe el mail " +  result.email + " pero la clave es incorrecta");                
                     }                           
            } else {                
                      return res.send("No existe este mail " +  info.email);            
             }
        }).catch((err) => {     
              console.log(err)
        });
    }
}


/* Exportar */

module.exports = userController;