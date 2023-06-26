"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nombre_, raza_, tamano_) {
        this.nombre = nombre_;
        this.raza = raza_;
        this.tamano = tamano_;
    }
    Animal.prototype.sonido = function () {
        if (this.raza == 'perro') {
            console.log('Ladrar es mi sonido... guauu...');
        }
        else if (this.raza == 'gato') {
            console.log('Maullar es mi sonido... miauuuu...');
        }
        else
            console.log('Hago algún sonido?');
    };
    return Animal;
}());
exports.Animal = Animal;
// Instancia clase hijo
console.log('- - Imprime desde modificadoresPrivado.ts - -');
var gato = new Animal('michi', 'gato', 5);
console.log(gato.nombre);
console.log(gato.raza);
console.log(gato.tamano);
gato.sonido();
