/* Importar */
const db = require('../db/data');

/* Desarrollar */
const movieController = {
    index : function(req, res) {

        return res.render('movies', {peliculas : db.lista});
    }
}


/* Exportar */

module.exports = movieController;