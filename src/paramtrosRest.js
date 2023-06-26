var cartaPostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre del d\u00EDa es: ".concat(postre, ", y tiene ").concat(frutas));
};
cartaPostres("Pavlova", ' frutillas', ' arandanos', ' cerezas');
