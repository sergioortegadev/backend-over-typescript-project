export const nombre: string = 'Sergio';
class Persona {
  nombre: string;

  constructor(nombre_: string) {
    this.nombre = nombre_;
  }

  saludar(otraPersona: string) {
    console.log(`Hola ${otraPersona}, mi nombre es ${nombre}`);
  }
}

export interface Humano {
  nombre: string;
}

export const mostrar = (): void => {
  console.log('Mostrar');
};

export const sergio = new Persona('Sergio');
