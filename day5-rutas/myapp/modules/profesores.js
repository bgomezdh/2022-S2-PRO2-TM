const profesores = {
    lista : [
        {
            nombre : "brian",
            apellido : "gomez",
            edad : 30
        },
        {
            nombre : "luis",
            apellido : "navas",
            edad : 50
        }
    ],
    buscarPorNombre : function (nombre) {
        /*                      brian */
        let respuesta = [];
        for (let i = 0; i < profesores.lista.length; i++) {
            if (profesores.lista[i].nombre == nombre.toLowerCase()) {
                respuesta.push(profesores.lista[i])
            }
        }
        return respuesta;
        
    }
}

module.exports = profesores;