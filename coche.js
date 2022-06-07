// funcion que suma
let a = 3;
let b = 3;
let c = 8;

function suma(a, b, c) {
  increment = a + b + c;
  return increment;
}
const resultado = suma(a, b, c);
console.log(resultado);
// clase que cuenta las puerta que tiene el coche
class Coche {
  puerta() {
    return 4;
  }
}
const puertas = new Coche();
console.log(puertas.puerta());

// objeto + que sume una puerta
const miCoche = {
  puertas: 4,
};

const resultadoPuerta = miCoche.puertas + 1;

console.log(resultadoPuerta);
