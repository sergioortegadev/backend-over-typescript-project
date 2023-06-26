var Animal = /** @class */ (function () {
    // tanto los atributos como el método constructor y otros
    function Animal(nombre_, tamano_) {
        this.nombre = nombre_;
        this.tamano = tamano_;
    }
    Animal.prototype.moverse = function () {
        console.log('Me muevo... acá estoy');
    };
    return Animal;
}());
var perro = new Animal('pepe', 2);
console.log(perro.nombre);
console.log(perro.tamano);
perro.moverse();
