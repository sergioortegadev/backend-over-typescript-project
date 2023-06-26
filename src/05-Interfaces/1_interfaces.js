"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedrito = exports.juan = exports.comer = exports.caminar = void 0;
// Previo a la implementación defino métodos(para esa interfaz:Persona)
function caminar(persona) {
    if (persona.edad >= 2)
        console.log('Una persona llamada ' + persona.nombre + ' puede caminar');
    else if (persona.edad >= 0 && persona.edad < 2)
        console.log('Una persona de ' + persona.edad + ' años no camina, gatea...');
    else
        console.warn(persona.nombre +
            ' no tiene ingresada la edad o la misma está mal ingresada');
}
exports.caminar = caminar;
function comer(persona) {
    if (persona.edad >= 2)
        console.log(persona.nombre + ' come comida de adultos');
    else if (persona.edad >= 0 && persona.edad < 2)
        console.log(persona.nombre + ' come papilla');
    else
        console.warn(persona.nombre +
            ' no tiene ingresada la edad o la misma está mal ingresada');
}
exports.comer = comer;
// método sonar() no se define, pero como está en la interfaz debe indicarse en el objeto {que instancia de la interfaz:Persona}
exports.juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    comer: function () { },
    sonar: function () { },
};
console.log(exports.juan);
console.log(exports.juan.nombre);
console.log(exports.juan.apellido);
caminar(exports.juan);
comer(exports.juan);
console.log(exports.juan.edad);
exports.pedrito = {
    nombre: 'Pedrito',
    apellido: 'chavez',
    edad: 1,
    comer: function () { },
    sonar: function () { },
};
console.log(exports.pedrito);
console.log(exports.pedrito.nombre);
console.log(exports.pedrito.apellido);
caminar(exports.pedrito);
comer(exports.pedrito);
console.log(exports.pedrito.edad);
