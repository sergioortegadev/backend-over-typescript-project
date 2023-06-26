export interface Persona {
  // Atributos
  nombre: string;
  apellido: string;
  edad: number;

  // Métodos
  comer(): void;
  sonar(): void;
}

// Previo a la implementación defino métodos(para esa interfaz:Persona)
export function caminar(persona: Persona): void {
  if (persona.edad >= 2)
    console.log('Una persona llamada ' + persona.nombre + ' puede caminar');
  else if (persona.edad >= 0 && persona.edad < 2)
    console.log('Una persona de ' + persona.edad + ' años no camina, gatea...');
  else
    console.warn(
      persona.nombre +
        ' no tiene ingresada la edad o la misma está mal ingresada'
    );
}
export function comer(persona: Persona): void {
  if (persona.edad >= 2)
    console.log(persona.nombre + ' come comida de adultos');
  else if (persona.edad >= 0 && persona.edad < 2)
    console.log(persona.nombre + ' come papilla');
  else
    console.warn(
      persona.nombre +
        ' no tiene ingresada la edad o la misma está mal ingresada'
    );
}

// método sonar() no se define, pero como está en la interfaz debe indicarse en el objeto {que instancia de la interfaz:Persona}

export const juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 20,
  comer() {},
  sonar() {},
};
console.log(juan);
console.log(juan.nombre);
console.log(juan.apellido);
caminar(juan);
comer(juan);
console.log(juan.edad);

export const pedrito = {
  nombre: 'Pedrito',
  apellido: 'chavez',
  edad: 1,
  comer() {},
  sonar() {},
};
console.log(pedrito);
console.log(pedrito.nombre);
console.log(pedrito.apellido);
caminar(pedrito);
comer(pedrito);
console.log(pedrito.edad);
