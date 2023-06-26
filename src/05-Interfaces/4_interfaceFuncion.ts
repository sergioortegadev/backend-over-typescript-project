interface General {
  (nombre: string, apellido: string, edad: number): void;
}

const funcionGeneralUno: General = function (
  nombre: string,
  apellido: string,
  edad: number
): void {
  console.log(
    `FG1/ nombre: ${nombre}, con el apellido ${apellido}, tiene: ${edad} años`
  );
};

funcionGeneralUno('Sergio', 'Ortega', 42);

function funcionGeneralDos(
  nombre: string,
  apellido: string,
  edad: number
): void {
  console.log(
    `FG2/ nombre: ${nombre}, con el apellido ${apellido}, tiene: ${edad} años`
  );
}

funcionGeneralDos('Joaquin', 'Ortega Arce', 4);

console.log(funcionGeneralUno);
console.log(funcionGeneralDos);
