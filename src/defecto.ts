const mostrar = (nombre: string, apellido: string, edad: number = 42) => {
  return `Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}`;
};

console.log(
  `\n|-----data init----|\n` +
    mostrar(`Sergio`, `Ortega`) +
    `\n|-----end data-----|`
);

console.log(
  `\n|-----data init----|\n` +
    mostrar(`Joaquin`, `Ortega Arce`, 4) +
    `\n|-----end data-----|`
);
