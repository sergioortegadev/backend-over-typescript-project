interface Persona {
  altura: number;
  peso: number;
  nombre?: string;
}

const JuanOpcional: Persona = { altura: 1.78, peso: 77 };
const PepeOpcional = { altura: 1.65, peso: 120, nombre: 'Pepe' };

function MostrarMediaPeso(persona: Persona): string {
  let mediaPeso: number = persona.altura / persona.peso;
  let mediaPesoString: string = mediaPeso.toFixed(2);
  let mediaPesoFixed = parseFloat(mediaPesoString).toFixed(3);
  if (persona.nombre) {
    return `La persona ${persona.nombre} tiene una media de ${mediaPesoFixed}`;
  } else {
    return `Persona incógnita: tiene una media de ${mediaPesoFixed}`;
  }
}

console.log(MostrarMediaPeso(JuanOpcional));
console.log(MostrarMediaPeso(PepeOpcional));
