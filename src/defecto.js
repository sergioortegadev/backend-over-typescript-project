var mostrar = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 42; }
    return "Nombre: ".concat(nombre, "\nApellido: ").concat(apellido, "\nEdad: ").concat(edad);
};
console.log("\n|-----data init----|\n" +
    mostrar("Sergio", "Ortega") +
    "\n|-----end data-----|");
console.log("\n|-----data init----|\n" +
    mostrar("Joaquin", "Ortega Arce", 4) +
    "\n|-----end data-----|");
