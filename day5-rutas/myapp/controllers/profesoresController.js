/* Agrego los modulos que voy a utilizar */
let profesores = require('../modules/profesores');

const profesoresController = {
    index : function (req, res) {
        return res.send(profesores.lista)
    },

    buscarPorNombre : function (req, res) {
        let nombre = req.params.nombre;
    
        if (nombre == undefined) {
            return res.send('Por favor escriba un nombre como parametro')
        } else {
            let profeEncontrado = profesores.buscarPorNombre(nombre);
    
            if (profeEncontrado.length > 0) {
                return res.send(profeEncontrado)
            } else {
                return res.send('No se encontró un profe con el nombre de ' + nombre);
            }
        }
    }
};

module.exports = profesoresController;