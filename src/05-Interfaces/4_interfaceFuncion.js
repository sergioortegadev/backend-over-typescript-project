var funcionGeneralUno = function (nombre, apellido, edad) {
    console.log("FG1/ nombre: ".concat(nombre, ", con el apellido ").concat(apellido, ", tiene: ").concat(edad, " a\u00F1os"));
};
funcionGeneralUno('Sergio', 'Ortega', 42);
function funcionGeneralDos(nombre, apellido, edad) {
    console.log("FG2/ nombre: ".concat(nombre, ", con el apellido ").concat(apellido, ", tiene: ").concat(edad, " a\u00F1os"));
}
funcionGeneralDos('Joaquin', 'Ortega Arce', 4);
console.log(funcionGeneralUno);
console.log(funcionGeneralDos);
