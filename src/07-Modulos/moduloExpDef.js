"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Producto = /** @class */ (function () {
    function Producto(prodName_, id_, ean_, description_, price_) {
        this.prodName = prodName_;
        this.id = id_;
        this.ean = ean_;
        this.description = description_;
        this.price = price_;
    }
    Producto.prototype.mostrar = function () {
        console.log("Producto: ".concat(this.prodName));
    };
    return Producto;
}());
exports.default = Producto;
