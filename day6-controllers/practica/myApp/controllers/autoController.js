const autos = require("../db/autos");

const autoController = {

  index: function (req, res) {

        return res.render('autos', {
          listaAutos : autos.lista,
          tipo : "Todos los Autos"
        });
        /* return res.send(autos.lista); */
  },
  buscarPorColor: function (req, res) {
        let colorBuscado = req.params.color;
        let resultado = autos.buscarPorColor(colorBuscado);

        if (resultado.length > 0) {
            return res.render('autos', {
              listaAutos : resultado,
              tipo : "Todos los autos de color " + colorBuscado
            })
        } else {
            return res.send("No hay autos de color " + colorBuscado);
        }
  }
};

module.exports = autoController;
