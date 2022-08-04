function cambiarElUltimo(array, dato) {
    array.pop()
    array.push(dato)

    return array;
}

let variable = ["nemo0","nemo1","nemo2"];
let prueba = cambiarElUltimo(variable,"nemo3")
console.log(prueba);
