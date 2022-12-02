'use strict';
// 1. Pedir nombre al usuario y saludarlo con alerta
// 2. Pedir edad al usuario y responder si es o no es mayor de edad
/* 3. Pedir nombre y edad al usuario, usando la estructura "switch",
si se llama Pepita y es mayor de edad permitir ingreso a sala 1,
si se llama Pepita y es menor de edad permitir ingreso a sala 2,
si no se llama Pepita y es mayor de edad permitir ingreso a sala 3,
sino dirigir a la sala 4
*/
const nombre = prompt('Ingrese su nombre:');
const edad = Number(prompt('Ingrese su edad:'));
let esPepita;
let esMayorDeEdad;

if (nombre === 'Pepita') {
  esPepita = true;
} else {
  esPepita = false;
}

if (edad >= 18) {
  esMayorDeEdad = true;
} else {
  esMayorDeEdad = false;
}

let destino = null;

if (esPepita && esMayorDeEdad) {
  destino = 1;
}
if (esPepita && !esMayorDeEdad) {
  destino = 2;
}
if (!esPepita && esMayorDeEdad) {
  destino = 3;
}

switch (destino) {
  case 1:
    console.log(`Ingresa a la sala #${destino}`);
    break;
  case 2:
    console.log('Ingresa a la sala #' + destino);
    break;
  case 3:
    console.log(`Ingresa a la sala #${destino}`);
    break;
  default:
    console.log('Ingresa a la sala #4');
    break;
}
