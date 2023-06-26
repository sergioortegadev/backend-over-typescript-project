let auth = true;

class Padre {
  protected _nombre: string;

  protected _colorFavorito: string;

  get colorFavorito(): string {
    return this._colorFavorito;
  }
  set colorFavorito(v: string) {
    if (auth) {
      console.log('[ AUTORIZADO - ATRIB MODIFICADO ]');
      this._colorFavorito = v;
    } else console.log('[ ACCESO DENEGADO - ATRIB NO MODIFICADO]');
  }

  constructor(nombre_: string, colorFavorito_: string) {
    this._nombre = nombre_;
    this._colorFavorito = colorFavorito_;
  }
}

class Hijo extends Padre {
  private _edad: number;

  constructor(nombre_: string, colorFavorito_: string, edad_: number) {
    super(nombre_, colorFavorito_);
    this._edad = edad_;
  }

  private mostrarEdad(): void {
    console.log(this._edad);
  }
  private leGusta(): void {
    console.log(this._colorFavorito);
  }
  mostrarDatosHijo(): void {
    console.log();
    console.log(`[ - - Datos Objeto: "${this._nombre}"  - - ]`);
    console.log(`Edad: ${this._edad}`);
    console.log(`Le gusta el: ${this._colorFavorito}`);
  }
}

const coco = new Hijo('Joaquin', 'rojo', 4);
coco.mostrarDatosHijo();
coco.colorFavorito = 'azul';
coco.mostrarDatosHijo();
