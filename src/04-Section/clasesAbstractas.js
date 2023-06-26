var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.molestar = function () {
        console.log('| - | - yo molesto - | - |');
    };
    Animal.prototype.hacerRuido = function () { };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.hacerRuido = function () {
        console.log(' / / guauuu / /');
    };
    Perro.prototype.hacerceElMuerto = function () {
        console.log(' . . . ');
    };
    return Perro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.hacerRuido = function () {
        console.log(' / / miau / /');
    };
    Gato.prototype.serIndiferente = function () {
        console.log(' ._. nada me importa ._. ');
    };
    return Gato;
}(Animal));
// Aquí utilizamos POLIMORFISMO en 'haceRuido()'
function haceRuido(animal) {
    animal.hacerRuido();
}
var Michi = new Gato();
var Pichi = new Perro();
console.log('=== PERRO PICHI ===');
haceRuido(Pichi);
Pichi.molestar();
Pichi.hacerceElMuerto();
console.log(Pichi);
console.log();
console.log('=== GATO MICHI ===');
haceRuido(Michi);
Michi.molestar();
Michi.serIndiferente();
console.log(Michi);
