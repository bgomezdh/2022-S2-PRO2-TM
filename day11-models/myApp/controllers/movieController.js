/* Importar */
/* const db = require('../db/data'); */

const db = require('../database/models');
const movie = db.Movie;

/* Desarrollar */
const movieController = {
    index : function(req, res) {

        movie.findAll()
        .then((result) => {
            return res.render('movies', {peliculas : result});
        }).catch((err) => {
            console.log(err);
        });

        
    }
}


/* Exportar */

module.exports = movieController;