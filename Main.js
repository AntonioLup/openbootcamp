class Persona {
  constructor(nombre, edad, telefono) {
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
  }
  // edad
  get edad() {
    return "Tengo " + this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
  // nombre
  get nombre() {
    return "Mi nombre " + this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  // telefono
  get telefono() {
    return "Mi tel " + this._telefono;
  }
  set telefono(telefono) {
    this._telefono = telefono;
  }
}
const alumno = new Persona("Antonio", 22, 642525245);

console.log(alumno.edad);
console.log(alumno.nombre);
console.log(alumno.telefono);
