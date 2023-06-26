interface Persona {
  readonly nombre: string;
  readonly apellido: string;
}

const Manuel: Persona = { nombre: 'Manuel', apellido: 'Muñoz' };
console.log(Manuel);
Manuel.nombre = 'Jose Manuel';
console.log(Manuel);
