'use strict';
// Programa que retorne TRUE o FALSE si un string dado es palindromo.
const isPalindrome = (str) => {
  const strWord = str.replaceAll(' ', '');
  let word = strWord.split('');
  word = word.reverse();
  word = word.join('');
  return strWord === word;
};
// console.log(isPalindrome('hi'));
// console.log(isPalindrome('anita lava la tina'));
// console.log(isPalindrome('yo voy'));
// console.log(isPalindrome('reconocer'));
// console.log(isPalindrome('luz azul'));
// console.log(isPalindrome('hello'));

// Programa que retorne el número de vocales que se encuentren en un string.
const vowelCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  let count = 0;
  for (const c of str.toLowerCase()) if (vowels.includes(c)) count++;
  return count;
};
//console.log(vowelCount('hi'));
//console.log(vowelCount('impresionante'));
//console.log(vowelCount('Fernanda'));
//console.log(vowelCount('hola amigos, ¿cómo están?'));
//console.log(vowelCount('anita lava la tina'));
//console.log(vowelCount('Hola, estoy estudiando programación'));

// Programa que retorne el resultado de convertir grados Fahrenheit a Celsius.
const fahToCel = (fah) => (fah - 32) * (5 / 9);
//console.log(fahToCel(13));
//console.log(fahToCel(32));
//console.log(fahToCel(59));

// Programa que retorne el área de un triángulo.
const triangleArea = (base, height) => (base * height) / 2;
//console.log(triangleArea(8, 16));
//console.log(triangleArea(59, 3));

// Programa que retorne el área de un cuadrado.
const squareAre = (side) => side * side;
//console.log(squareAre(2));

/* ========================================================================== */

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
function division() {
  const numero1 = parseInt(prompt('Ingresa un primer número:'));
  const numero2 = parseInt(prompt('Ingresa un segundo número:'));
  const resultado = numero1 / numero2;
  alert(`${numero1} / ${numero2} = ${resultado}`);
}
//division();

// Pedir dos números, mostrar el resto de la división.
const residuo = () => {
  const numero1 = parseInt(prompt('Ingresa un primer número:'));
  const numero2 = parseInt(prompt('Ingresa un segundo número:'));
  const resultado = numero1 % numero2;
  alert(`${numero1} mod ${numero2} = ${resultado}`);
};
//residuo();

// Pedir dos números, mostrar si el primer número es divisible por el segundo.
function esDivisible() {
  const numero1 = parseInt(prompt('Ingresa un primer número:'));
  const numero2 = parseInt(prompt('Ingresa un segundo número:'));
  const resultado = numero1 % numero2;
  resultado === 0
    ? alert(`${numero1} SI es divisible por ${numero2}`)
    : alert(`${numero1} NO es divisible por ${numero2}`);
  /* if (resultado === 0) {
    alert(`${numero1} SI es divisible por ${numero2}`);
  } else {
    alert(`${numero1} NO es divisible por ${numero2}`);
  } */
}
//esDivisible();

// Pedir dos números y el nombre de una operación, mostrar el resultado.
const unaOperacion = () => {
  const numero1 = parseInt(prompt('Ingresa un primer número:'));
  const numero2 = parseInt(prompt('Ingresa un segundo número:'));
  const operacion = prompt(
    'Ingresa una operación: sumar, restar, multiplicar o dividir'
  );

  switch (operacion) {
    case 'sumar':
      alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
      break;
    case 'restar':
      alert(`${numero1} - ${numero2} = ${numero1 - numero2}`);
      break;
    case 'multiplicar':
      alert(`${numero1} x ${numero2} = ${numero1 * numero2}`);
      break;
    case 'dividir':
      alert(`${numero1} / ${numero2} = ${numero1 / numero2}`);
      break;
    default:
      alert(`La operación "${operacion}" no existe en esta función.`);
      break;
  }
};
//unaOperacion();

// Pedir un número, mostrar la suma total desde 1 hasta n.
function sumaTotal() {
  const numero1 = parseInt(prompt('Ingresa un número:'));

  let resultado = 0;

  let i = 1;
  while (i <= numero1) {
    resultado += i;
    i++;
  }

  /* for (let i = 1; i <= numero1; i++) {
    resultado += i;
  } */

  alert('La suma total es: ' + resultado);
}
//sumaTotal();

// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
const sumaTotalDePares = () => {
  const numero1 = parseInt(prompt('Ingresa un número:'));

  let resultado = 0;

  for (let i = 1; i <= numero1; i++) {
    if (i % 2 === 0) {
      resultado = resultado + i;
    }
  }

  alert('La suma total de los pares es: ' + resultado);
};
//sumaTotalDePares();

// Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
const sumaTotalDeImpares = () => {
  const numero1 = parseInt(prompt('Ingresa un número:'));

  let resultado = 0;

  for (let i = 1; i <= numero1; i++) {
    if (i % 2 !== 0) {
      resultado = resultado + i;
    }
  }

  alert('La suma total de los impares es: ' + resultado);
};
//sumaTotalDeImpares();

// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
function multiplosDe3() {
  const numero1 = parseInt(prompt('Ingresa un número:'));

  let i = 1;
  while (i <= numero1) {
    if (i % 3 === 0) {
      console.log(i);
    }
    i++;
  }
}
//multiplosDe3();

// Pedir un número, mostrar los números desde n hasta 0.
const desdeNhasta0 = () => {
  const numero1 = parseInt(prompt('Ingresa un número:'));

  for (let i = numero1; i > -1; i--) {
    console.log(i);
  }
};
//desdeNhasta0();
