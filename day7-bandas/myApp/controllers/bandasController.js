const bandas = require('../db/index')

const bandasController = {
    index: function (req, res) {


        return res.render('bandas', {
            /* Clave : Valor */
            miLista: bandas.lista
        }
 )
    },
    buscarPorId : function (req, res) {
        let id = req.params.id;

        let resultado = bandas.buscarPorId(id)

        return res.render('bandas', {
            miLista : resultado
        })
        
    } ,
    buscarPorGenero: function (req, res) {
        let genero = req.params.genero;

        let resultado = bandas.buscarPorGenero(genero)

        return res.render('bandas', {
            miLista : resultado
        })
    }
}


module.exports = bandasController;