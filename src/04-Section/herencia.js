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
var Padre = /** @class */ (function () {
    function Padre(nombre_, edad_) {
        this.nombre = nombre_;
        this.edad = edad_;
    }
    Padre.prototype.mostrarNombre = function () {
        console.log(this.nombre);
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(apellido_, nombre_, edad_) {
        var _this = _super.call(this, nombre_, edad_) || this;
        _this.apellido = apellido_;
        return _this;
    }
    Hijo.prototype.mostrarApellidoHijo = function () {
        console.log(this.apellido);
    };
    return Hijo;
}(Padre));
// Instancia clase hijo
var coco = new Hijo('Joaquín', 'Ortega');
console.log('|--- Datos clase hijo "coco" ---|');
coco.mostrarNombre();
coco.mostrarApellidoHijo();
if (coco.edad)
    console.log('Edad: ' + coco.edad);
/*
// Instancia clase padre
const sergio = new Padre('Sergio', 42);
sergio.mostrarNombre(); */
