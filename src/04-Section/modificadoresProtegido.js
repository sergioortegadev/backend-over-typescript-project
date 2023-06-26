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
var auth = true;
var Padre = /** @class */ (function () {
    function Padre(nombre_, colorFavorito_) {
        this._nombre = nombre_;
        this._colorFavorito = colorFavorito_;
    }
    Object.defineProperty(Padre.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (v) {
            if (auth) {
                console.log('[ AUTORIZADO - ATRIB MODIFICADO ]');
                this._colorFavorito = v;
            }
            else
                console.log('[ ACCESO DENEGADO - ATRIB NO MODIFICADO]');
        },
        enumerable: false,
        configurable: true
    });
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(nombre_, colorFavorito_, edad_) {
        var _this = _super.call(this, nombre_, colorFavorito_) || this;
        _this._edad = edad_;
        return _this;
    }
    Hijo.prototype.mostrarEdad = function () {
        console.log(this._edad);
    };
    Hijo.prototype.leGusta = function () {
        console.log(this._colorFavorito);
    };
    Hijo.prototype.mostrarDatosHijo = function () {
        console.log();
        console.log("[ - - Datos Objeto: \"".concat(this._nombre, "\"  - - ]"));
        console.log("Edad: ".concat(this._edad));
        console.log("Le gusta el: ".concat(this._colorFavorito));
    };
    return Hijo;
}(Padre));
var coco = new Hijo('Joaquin', 'rojo', 4);
coco.mostrarDatosHijo();
coco.colorFavorito = 'azul';
coco.mostrarDatosHijo();
