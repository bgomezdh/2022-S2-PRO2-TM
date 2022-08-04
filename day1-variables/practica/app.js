/*  Crear una variable que se llame diaSemana 

let diaSemana = "martes";

if (diaSemana == "lunes") {
        console.log("Hoy es lunes, que fiaca");
} else if(diaSemana == "martes"){
        console.log("Hoy es martes, va mejorando la cosa");
}else if(diaSemana == "miercoles"){
    console.log("Hoy es martes, va mejorando la cosa");
}
else if(diaSemana == "jueves"){
    console.log("Hoy es martes, va mejorando la cosa");
}
else if(diaSemana == "viernes"){
    console.log("Hoy es martes, va mejorando la cosa");
}
else if(diaSemana == "sabado"){
    console.log("Hoy es martes, va mejorando la cosa");
}else {
    console.log("otro dia");
}

 */

let personas = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

for (let i = 0; i < personas.length; i++) {
   
    if (personas[i].edad < 18 && personas[i].ciudad == undefined) {
        console.log(`Hola ${personas[i].nombre} ${personas[i].apellido} criatura viajera!`);
    } else if(personas[i].edad > 18 && personas[i].ciudad == undefined){
        console.log(`Hola ${personas[i].nombre} ${personas[i].apellido} eminencia viajera!`);
    } else if (personas[i].edad < 18 && personas[i].ciudad != undefined){
        console.log(`Hola mini ${personas[i].nombre} ${personas[i].apellido} de ${personas[i].ciudad}`);
    }else if (personas[i].edad >= 18 && personas[i].ciudad != undefined){
        console.log(`Hola mayor ${personas[i].nombre} ${personas[i].apellido} de ${personas[i].ciudad}`);
    }else {
        console.log("no entro");
    }
}
