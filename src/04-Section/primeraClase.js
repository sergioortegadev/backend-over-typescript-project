"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.miPrimerAuto = exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var miPrimerAuto = new Vehiculo('Ford', '1995', 5);
exports.miPrimerAuto = miPrimerAuto;
console.log("mi primer auto fue un:");
console.log(miPrimerAuto);
