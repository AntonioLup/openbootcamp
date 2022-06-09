// if else

let numeroIf = 10;

if (numeroIf > 0) {
  console.log(true);
} else {
  console.log(false);
}
// bucle while
console.log("while");

let numeroWhile = 0;
while (numeroWhile < 3) {
  numeroWhile = numeroWhile + 1;
  console.log(numeroWhile);
}
// bucle do while
console.log("do while");

do {
  numeroWhile = numeroWhile + 1;
  console.log(numeroWhile);
} while (numeroWhile < 3);
// for
console.log("for");

let numeroFor = 0;
for (numeroFor; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}
// switch
let estacion = "verano";
switch (key) {
  case "verano":
    console.log("es verano");
    break;
  case "otoño":
    console.log("es otoño");
    break;
  case "invierno":
    console.log("es otoño");
    break;

  default:
    console.log("es otra estacion");

    break;
}
console.log("termine");
