'use strict';
// 1. Pedir nombre al usuario y saludarlo.
function saludar() {
  const nombre = prompt('Escribe tu nombre');
  if (nombre === null) {
    alert(':( No escribiste tu nombre.');
  } else {
    alert('Hola, ' + nombre);
  }
}
//saludar();

// 2. Pedir edad al usuario y responder si es o no es mayor de edad.
function esMayorDeEdad() {
  const edad = Number(prompt('Escribe tu edad'));
  edad >= 18 ? alert('Eres mayor de edad') : alert('Eres menor de edad');
}
//esMayorDeEdad();

/* 3. Pedir nombre y edad al usuario,
si se llama Pepita y es mayor de edad permitir ingreso a sala de espera 1,
si se llama Pepita y es menor de edad permitir ingreso a sala de espera 2,
si no se llama Pepita pero es mayor de edad permitir ingreso a sala de espera 3,
sino dirigir a la sala de espera. 4 */

// Pedir un número y mostrar los números pares desde 1 hasta número ingresado.
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

// Pedir un número, mostrar si es positivo, negativo o si es cero.
// Pedir un número, mostrar si es par, impar o si es cero.
// Pedir un número, mostrar si es un número primo o no.
// Pedir dos números, mostrar la suma.
// Pedir dos números, mostrar la resta.
// Pedir dos números, mostrar la multiplicación.
// Pedir dos números, mostrar la división.
// Pedir dos números, mostrar el resto de la división.
// Pedir dos números, mostrar si el primer número es divisible por el segundo.
// Pedir un número, mostrar la suma total desde 1 hasta n.
// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
// Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
// Pedir un número, mostrar los números desde n hasta 0.
// Pedir una palabra, mostrar la cantidad de letras que tiene la palabra.
// Pedir una palabra, mostrar cantidad de vocales que incluye la palabra.
