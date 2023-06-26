export class Padre {
  nombre: string;
  edad: number;
  constructor(nombre_: string, edad_: number) {
    this.nombre = nombre_;
    this.edad = edad_;
  }
  mostrarNombre() {
    console.log(this.nombre);
  }
}

export class Hijo extends Padre {
  apellido: string;
  nacionalidad: string;

  constructor(
    nombre_: string,
    apellido_: string,
    nacionalidad_: string = 'Argentina', //por defecto
    edad_?: number //opcional
  ) {
    super(nombre_, edad_);
    this.apellido = apellido_;
    this.nacionalidad = nacionalidad_;
  }

  mostrarDatosHijo(): void {
    console.log('|--- Datos clase hijo "coco" ---|');
    this.mostrarNombre();
    console.log(this.apellido);
    console.log(this.nacionalidad);
    if (this.edad) console.log('Edad: ' + this.edad);
  }
}

// Instancia clase hijo
console.log('- - Imprime desde herencia.ts - -');
const cocoloco = new Hijo('Joaquín', 'Ortega');
cocoloco.mostrarDatosHijo();

/* 
// Instancia clase padre
const sergio = new Padre('Sergio', 42);
sergio.mostrarNombre(); */
