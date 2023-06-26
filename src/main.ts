import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
//import { Vehiculo, miPrimerAuto } from './04-Section/primeraClase.ts';
//import { Padre, Hijo } from './04-Section/herencia.ts';
//import { Animal } from './04-Section/modificadoresPrivado.ts';
//import { caminar } from './05-Interfaces/1_interfaces.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Practica con Typescript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

console.log('- - Imprime desde main.ts - -');

/*
const perrito = new Animal('firulais', 'perro', 1);
console.log(perrito.nombre);
console.log(perrito.raza);
console.log(perrito.tamano);
perrito.sonido();

const coco = new Hijo('Joaquín', 'Ortega', 'Argentina Italiana', 4);
coco.mostrarDatosHijo();
console.log(Vehiculo);
console.log(miPrimerAuto);
*/

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
