var opcionales = function (nombre, apellido, edad) {
    if (edad)
        console.log("se llama ".concat(nombre, ", y su apellido es ").concat(apellido, ", y tiene ").concat(edad, " a\u00F1os"));
    else
        console.log("se llama ".concat(nombre, ", y su apellido es ").concat(apellido));
};
opcionales('sergio', 'ortega', 42);
opcionales('Sergio', 'Ortega');
opcionales('Sergio', 'Ortega', 40 + 2);
