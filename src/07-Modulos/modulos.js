"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sergio = exports.mostrar = exports.nombre = void 0;
exports.nombre = 'Sergio';
var Persona = /** @class */ (function () {
    function Persona(nombre_) {
        this.nombre = nombre_;
    }
    Persona.prototype.saludar = function (otraPersona) {
        console.log("Hola ".concat(otraPersona, ", mi nombre es ").concat(exports.nombre));
    };
    return Persona;
}());
var mostrar = function () {
    console.log('Mostrar');
};
exports.mostrar = mostrar;
exports.sergio = new Persona('Sergio');
