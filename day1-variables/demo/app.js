// variables
let nombre = 'Brian';

nombre = 'Axcel';

//const
const apellido = 'Gomez';

let pelisFav = ['Peli1', 'Peli2', 'Peli3', 'Peli4' ];

let profesor = {
    nombre : "Carlos",
    altura: 170,
    edad : 28,
    saludar : function() {
        return `Hola, mi nombre es ${this.nombre} Gomez`;
    }
}


console.log(profesor.saludar());
