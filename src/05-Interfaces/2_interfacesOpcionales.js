var JuanOpcional = { altura: 1.78, peso: 77 };
var PepeOpcional = { altura: 1.65, peso: 120, nombre: 'Pepe' };
function MostrarMediaPeso(persona) {
    var mediaPeso = persona.altura / persona.peso;
    var mediaPesoString = mediaPeso.toFixed(2);
    var mediaPesoFixed = parseFloat(mediaPesoString).toFixed(3);
    if (persona.nombre) {
        return "La persona ".concat(persona.nombre, " tiene una media de ").concat(mediaPesoFixed);
    }
    else {
        return "Persona inc\u00F3gnita: tiene una media de ".concat(mediaPesoFixed);
    }
}
console.log(MostrarMediaPeso(JuanOpcional));
console.log(MostrarMediaPeso(PepeOpcional));
