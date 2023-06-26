abstract class Animal {
  public molestar(): void {
    console.log('| - | - yo molesto - | - |');
  }
  public abstract hacerRuido(): void {}
}

class Perro extends Animal {
  public hacerRuido() {
    console.log(' / / guauuu / /');
  }
  public hacerceElMuerto(): void {
    console.log(' . . . ');
  }
}

class Gato extends Animal {
  public hacerRuido() {
    console.log(' / / miau / /');
  }
  public serIndiferente(): void {
    console.log(' ._. nada me importa ._. ');
  }
}

// Aquí utilizamos POLIMORFISMO en 'haceRuido()'
function haceRuido(animal: Animal): void {
  animal.hacerRuido();
}

const Michi = new Gato();
const Pichi = new Perro();

console.log('=== PERRO PICHI ===')
haceRuido(Pichi);
Pichi.molestar()
Pichi.hacerceElMuerto();
console.log(Pichi)
console.log()
console.log('=== GATO MICHI ===')
haceRuido(Michi);
Michi.molestar()
Michi.serIndiferente();
console.log(Michi)

