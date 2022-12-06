'use strict';
// Pedir nombre al usuario y saludarlo.
function saludar() {
  const nombre = prompt('Escribe tu nombre');
  if (nombre === null) {
    alert(':( No escribiste tu nombre.');
  } else {
    alert('Hola, ' + nombre);
  }
}
//saludar();

// Pedir edad al usuario y responder si es o no es mayor de edad.
function esMayorDeEdad() {
  const edad = Number(prompt('Escribe tu edad'));
  edad >= 18 ? alert('Eres mayor de edad') : alert('Eres menor de edad');
}
//esMayorDeEdad();

/* Pedir nombre y edad al usuario,
si se llama Pepita y es mayor de edad permitir ingreso a sala de espera 1,
si se llama Pepita y es menor de edad permitir ingreso a sala de espera 2,
si no se llama Pepita pero es mayor de edad permitir ingreso a sala de espera 3,
sino dirigir a la sala de espera. 4 */

// Pedir un número y mostrar los números pares desde 1 hasta n.
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

// Pedir un número, mostrar el doble de n.
function elDoble() {
  const numero = parseInt(prompt('Ingrese un número:'));
  const resultado = numero * 2;
  alert('El doble de ' + numero + ' es: ' + resultado);
}
//elDoble();

// Pedir un número, mostrar el triple de n.
function elTriple() {
  const numero = parseInt(prompt('Ingrese un número:'));
  const resultado = numero * 3;
  alert(`El triple de ${numero} es: ${resultado}`);
}
//elTriple();

// Pedir un número, mostrar la mitad de n.
function laMitad() {
  const numero = parseInt(prompt('Ingrese un número:'));
  const resultado = numero / 2;
  alert('La mitad de ' + numero + ' es: ' + resultado);
}
//laMitad();

// Pedir un número, mostrar la tercera parte de n.
function terceraParte() {
  const numero = parseInt(prompt('Ingrese un número:'));
  const resultado = numero / 3;
  alert('La tercera parte de ' + numero + ' es: ' + resultado);
}
//terceraParte();

// Pedir un número, mostrar el cuadrado de n.
function elCuadrado() {
  const numero = parseInt(prompt('Ingrese un número:'));
  alert(`El cuadrado de ${numero} es: ${numero * numero}`);
}
//elCuadrado();

// Pedir un número, mostrar n reducido en 5.
function reducidoEn5() {
  const numero = parseInt(prompt('Ingrese un número:'));
  alert(`El número ${numero} reducido en 5 es: ${numero - 5}`);
}
//reducidoEn5();

// Pedir un número, mostrar el doble de n más 4.
function elDobleMas4() {
  const numero = parseInt(prompt('Ingrese un número:'));
  const resultado = numero * 2 + 4;
  alert(`El doble de ${numero} más 4 es: ${resultado}`);
}
//elDobleMas4();

// Pedir un número, mostrar si es positivo, negativo o si es cero.
function ceroNegativoPositivo() {
  const numero = parseInt(prompt('Ingrese un número:'));
  if (numero === 0) {
    alert('Ingresó el número cero.');
  } else if (numero < 0) {
    alert('Ingresó un número negativo.');
  } else {
    alert('Ingresó un número positivo.');
  }
}
//ceroNegativoPositivo();

// Pedir un número, mostrar si es par, impar o si es cero.
function ceroParImpar() {
  const numero = parseInt(prompt('Ingrese un número:'));
  if (numero === 0) {
    alert('El numero ' + numero + ' es cero.');
  } else if (numero % 2 === 0) {
    alert('El numero ' + numero + ' es un número par.');
  } else {
    alert('El numero ' + numero + ' es un número impar.');
  }
}
//ceroParImpar();

// Pedir un número, mostrar si es un número primo o no.
function esPrimo() {
  const numero = parseInt(prompt('Ingresa un número mayor que 1:'));
  if (numero < 2) {
    alert('Error, debes ingresar un número mayor que 1');
    return;
    console.log('Esta línea NO se ejecutará porque está después de RETURN');
  }
  let contador = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      contador++;
    }
  }
  if (contador === 2) {
    alert(`El número ${numero}, es primo`);
  } else {
    alert(`El número ${numero}, no es primo`);
  }
}
//esPrimo();

// Pedir dos números, mostrar la suma.
const suma = () => {
  const numero1 = parseInt(prompt('Ingresa un primer número:'));
  const numero2 = parseInt(prompt('Ingresa un segundo número:'));
  alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
};
//suma();

// Pedir dos números, mostrar la resta.
const resta = () => {
  const numero1 = parseInt(prompt('Ingresa un primer número:'));
  const numero2 = parseInt(prompt('Ingresa un segundo número:'));
  const resultado = numero1 - numero2;
  alert(`${numero1} - ${numero2} = ${resultado}`);
};
//resta();

// Pedir dos números, mostrar la multiplicación.
function multiplica() {
  const numero1 = parseInt(prompt('Ingresa un primer número:'));
  const numero2 = parseInt(prompt('Ingresa un segundo número:'));
  const resultado = numero1 * numero2;
  alert(numero1 + ' x ' + numero2 + ' = ' + resultado);
}
//multiplica();

// Pedir dos números, mostrar la división.
// Pedir dos números, mostrar el resto de la división.
// Pedir dos números, mostrar si el primer número es divisible por el segundo.
// Pedir dos números y el nombre de una operación, mostrar el resultado.
// Pedir un número, mostrar la suma total desde 1 hasta n.
// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
// Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
// Pedir un número, mostrar los números desde n hasta 0.
