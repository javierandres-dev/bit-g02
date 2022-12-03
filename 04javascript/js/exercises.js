'use strict';
// 1. Pedir nombre al usuario y saludarlo
function saludar() {
  const nombre = prompt('Escribe tu nombre');
  if (nombre === null) {
    alert(':( No escribiste tu nombre.');
  } else {
    alert('Hola, ' + nombre);
  }
}
//saludar();

// 2. Pedir edad al usuario y responder si es o no es mayor de edad
function esMayorDeEdad() {
  const edad = Number(prompt('Escribe tu edad'));
  edad >= 18 ? alert('Eres mayor de edad') : alert('Eres menor de edad');
}
//esMayorDeEdad();

/* 3. Pedir nombre y edad al usuario,
si se llama Pepita y es mayor de edad permitir ingreso a sala de espera 1,
si se llama Pepita y es menor de edad permitir ingreso a sala de espera 2,
si no se llama Pepita pero es mayor de edad permitir ingreso a sala de espera 3,
sino dirigir a la sala de espera 4 */

// Pedir un número y mostrar los numeros pares desde 1 hasta número ingresado
function multiplosDeDos() {
  const numero = parseInt(prompt('Ingresa un número'));
  let pares = '';
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += i + ', ';
    }
  }
  alert(`Los números pares desde 1 hasta ${numero}, son: ${pares}`);
}
//multiplosDeDos();
