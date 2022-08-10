/* Modulo Nativo */
const os = require('os');
//console.log(os.version());

/* Modulo de Terceros */
const moment = require('moment');
//console.log(moment().format());

/* Modulo Propio */
const calculadora = require('./modules/calculadora');
console.log(calculadora.restar(15, 10));

