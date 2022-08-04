/* Funcion saludar */

function saludar(nombre, apellido) {
    return `Hola ${nombre} ${apellido} espero este bien`;
}

/* Ejecutar la funcion */

/* console.log(saludar("Luis", "Navas")); */

/* ------------------------------------------------------------------------------------ */

let profe = {
    nombre : "Brian",
    apellido : "Gomez",
    agregarMaterias : function(cantidad){
        return `El profe ${this.nombre} ${this.apellido} tiene ${cantidad} materias en esta cursada`;
    }
};

let resultado = profe.agregarMaterias(6);

/* console.log(resultado); */

/* ------------------------------------------------------------------------------------ */


function sumar(a, b) {
    return a + b;
};

function restar(a, b) {
    return a - b;
};

function multiplicar(a, b) {
    return a * b;
};

function div(a, b) {
    return a / b;
};

function calculadora(a, b, queFuncionQuieresQueEjecute) {
    return queFuncionQuieresQueEjecute(a, b);    
}

console.log(calculadora(25,10, multiplicar));