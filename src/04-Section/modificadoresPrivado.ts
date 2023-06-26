export class Animal {
  // explicitamos "privado"
  private nombre: string;
  private raza: string;
  private tamano: number;

  public constructor(nombre_: string, raza_: string, tamano_: number) {
    this.nombre = nombre_;
    this.raza = raza_;
    this.tamano = tamano_;
  }

  public sonido(): void {
    if (this.raza == 'perro') {
      console.log('Ladrar es mi sonido... guauu...');
    } else if (this.raza == 'gato') {
      console.log('Maullar es mi sonido... miauuuu...');
    } else console.log('Hago algún sonido?');
  }
}

// Instancia clase hijo
console.log('- - Imprime desde modificadoresPrivado.ts - -');
const gato = new Animal('michi', 'gato', 5);
console.log(gato.nombre);
console.log(gato.raza);
console.log(gato.tamano);
gato.sonido();
