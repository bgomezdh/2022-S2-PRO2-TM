/* Importar */
const db = require('../database/models');
const movie = db.Movie;

const op = db.Sequelize.Op;

/* Desarrollar */
const movieController = {
    index : function(req, res) {

            let criterios = {
               /*  where : [{awards : 1}, {length : 120}],
                order : [["title", "DESC"]],
                limit : 2 */
            }

            movie.findAll(criterios)
            .then((result) => {
                /* #nota: Crear Contador */


                 /* #nota: Enviar dato a la vista con la clave contador*/


                return res.render("movies", {peliculas : result})
            });
        
    },

    show: (req, res) =>{
        let id = req.params.id;

        let relaciones = {
            include : [
                {
                    all : true,
                    nested: true
                }
                // {association:'genre'},
                // {association:'actors'}

            ]
        };
          
        movie.findByPk(id, relaciones)
        .then((result) => {
            console.log(result.actors);
            return res.render("detalleMovies", {movie : result})
        })
        .catch((err) =>{
            return res.redirect("/")
        });
    },

    showOne : (req, res) => {
        let busqueda = req.query.pelicula;

        let criterios = {
            where : [
                /* {title: busqueda} */
                {title: {[op.like] : "%" + busqueda + "%"}}
            ]
        }

        movie.findOne(criterios)
        .then((result) => {
            return res.render("detalleMovies", {movie : result})
        })
        .catch((err) =>{
            return res.redirect("/")
        });
        
    },
    /* Mostrar el form de la peli */
    create : (req, res) =>{
        return res.render("registerMovie");
    },
    /* Guardar una peli */
    store: (req, res) => {
        /* return res.send(req.body) */
        let peliculaAGuardar = req.body;
        /* luego la tengo que guardar en la DB */

        return res.redirect("/movies");
    },
    update:(req,res)=>{
        let id = req.params.id;
        movie.findByPk(id)
        .then((result)=>{
            return res.render('updateMovie',{movie:result.dataValues})
        })
        .catch(erro=>console.log(erro))
        
    },
    updatePost:(req,res)=>{
        let filtro = {
            where:[{id:req.body.id}]
        }
        let info = req.body;

        movie.update(info,filtro)
        .then((result)=>{
            return res.redirect('/movies')
        })
        .catch(()=>{
            return res.redirect('/')
        })
    },
destroy:(req,res)=>{
    let id = req.body.id;
    let filtro = {
        where:[{
            id:id
        }]
    }
    movie.destroy(filtro)
    .then((result)=>{
        return res.redirect('/movies')
    })
    .catch((err)=>{
        console.log(err);
        return res.redirect('/')
    })
}


}


/* Exportar */

module.exports = movieController;