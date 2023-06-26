class Vehiculo {
  marca: string;
  fecha: string;
  puertas: number;

  constructor(marca_: string, fecha_: string, puertas_: number) {
    this.marca = marca_;
    this.fecha = fecha_;
    this.puertas = puertas_;
  }

  acelerar(): void {
    console.log('Voy más rápido!!!');
  }

  frenar(): void {
    console.log('Frenaaaaa!!!');
  }
}

const miPrimerAuto = new Vehiculo('Ford', '1995', 5);

console.log(`mi primer auto fue un:`);
console.log(miPrimerAuto);
console.log(`Cuando piso el acelerador: `);
miPrimerAuto.acelerar();

export { Vehiculo };
export { miPrimerAuto };
