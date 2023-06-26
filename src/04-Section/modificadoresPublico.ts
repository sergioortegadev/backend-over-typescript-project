class Animal {
  nombre: string;
  // si no colocamos nada, por defecto es "public"
  public tamano: number;

  // tanto los atributos como el método constructor y otros

  public constructor(nombre_: string, tamano_: number) {
    this.nombre = nombre_;
    this.tamano = tamano_;
  }

  public moverse(): void {
    console.log('Me muevo... acá estoy');
  }
}

const perro = new Animal('pepe', 2);
console.log(perro.nombre);
console.log(perro.tamano);
perro.moverse();
