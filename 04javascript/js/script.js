// MODO ESTRICTO
'use strict';
/* unaVariable = 'valor de una variable';
console.log(unaVariable); */

// Soy un comentario de una sola línea
/*
Soy un comentario
de varias
líneas
*/

//console.log('Hola, desde un archivo externo.');
//console.log('Window Object:', window);

// VARIABLES
/* let soyVariable = 'soy el valor de la variable';

var nombreVariable1 = 'Hola';
nombreVariable1 = 'cambio de valor en la variable1';
console.log(nombreVariable1);

let nombreVariable2 = 'Hello';
nombreVariable2 = 'cambio de valor en la variable2';
console.log(nombreVariable2);

const nombreVariable3 = 'No se modifica, no cambia su valor inicial';
nombreVariable3 = 'cambio de valor en la variable3';
console.log(nombreVariable3);

let miVariable;
console.log(miVariable);

miVariable = 'Hi';
console.log(miVariable); */

// CONSTANTES
/* const soyConstante = 'No se modifica, no cambia su valor inicial';
console.log(soyConstante)

const miConstante;
console.log(miConstante) */

// TIPOS DE DATO - string, number, boolean, undefined, null, NaN
/* let tdString = 'string o cadena de texto';
tdString = "string con una 'palabra' entre comillas";
tdString = 'string con una "palabra" entre comillas';
tdString = '10';
console.log(tdString);

let tdNumber = 10.01;
tdNumber = 0x00;
tdNumber = 10;
console.log(tdNumber);

let tdBoolean = true;
tdBoolean = false;
console.log(tdBoolean);

let soyVariableSoloDeclarada;
console.log(soyVariableSoloDeclarada);
let soyVariableSoloInicializada = null;
console.log(soyVariableSoloInicializada);
let num1 = 'hola';
let num2 = 1;
let soyNaN = num1 * num2;
console.log(soyNaN); */

// OPERADOR typeof
/* console.log(typeof tdString);
console.log(typeof tdNumber);
console.log(typeof tdBoolean); */

// INTERACCIÓN
/* let nombreUsuario = prompt('Ingresa tu nombre');
console.log(nombreUsuario);
let edadUsuario = prompt('Ingresa tu edad');
console.log(edadUsuario); */

// CONCATENACIÓN
/* let nombreYedad = nombreUsuario + ' ' + edadUsuario;
document.write(nombreYedad); */

// PLANTILLAS DE CADENA DE TEXTO
/* const nombre = 'Pepita';
const apellido = 'Pérez';

const nombreApellido = nombre + ' ' + apellido;
const nombreApellido = `El apellido de ${nombre} es ${apellido}`;
console.log(nombreApellido); */

// CONVERSIÓN DE TIPOS
/* let numero = prompt('ingresa un número');
console.log(numero);
console.log('antes de la conversión de tipo:', typeof numero);
numero = Number(numero);
console.log('después de la conversión de tipo:', typeof numero);

let numero1 = parseInt(prompt('Ingrese el primer número:'));
let numero2 = prompt('Ingrese el segundo número:');
numero2 = parseInt(numero2);

let resultado = numero1 + numero2;
console.log('el resultado es:', resultado);

let logico = prompt('Ingrese "true" o "false":');
console.log('ANTES tipo de dato:', typeof logico, logico);
logico = Boolean(logico);
console.log('DESPUÉS tipo de dato:', typeof logico, logico); */

// OPERADORES
//let numero1 = parseInt(prompt('Ingrese el primer número:'));
//let numero2 = prompt('Ingrese el segundo número:');
//let numero3 = Number(prompt('Ingrese el tercer número:'));
//numero2 = parseInt(numero2);

//let resultado = numero1 + numero2 + numero3;
/* let resultado = numero1 + numero2;
console.log('el resultado de la suma es:', resultado);
resultado = numero1 - numero2;
console.log('el resultado de la resta es:', resultado);
resultado = numero1 * numero2;
console.log('el resultado de la multiplicación es:', resultado);
resultado = numero1 / numero2;
console.log('el resultado de la división es:', resultado);
resultado = numero1 % numero2;
console.log('el resultado del resto de la división o módulo es:', resultado); */

/* numero1++;
console.log(numero1);
numero2--;
console.log(numero2); */

/* let variable1 = '10';
let variable2 = 10;

let resultado = variable1 == variable2;
resultado = variable1 === variable2;
resultado = variable1 != variable2;
resultado = variable1 !== variable2;

variable1 = 5;

resultado = variable1 > variable2;
resultado = variable1 < variable2;

variable1 = 4;
variable2 = 2;

resultado = variable1 >= variable2;
resultado = variable1 <= variable2;
console.log('resultado:', resultado); */

/* let variable1 = 1;
let variable2 = 2;
let resultado = variable1 === 1 && variable2 === 2;
resultado = variable1 === 11 || variable2 === 2;
console.log('resultado:', resultado);
console.log('resultado:', !resultado); */

/* let miVariable = 'mi valor';
miVariable = 10;
miVariable += 2;
miVariable -= 2;
miVariable *= 2;
miVariable /= 2;
miVariable %= 2;
console.log(miVariable); */

// ESTRUCTURAS DE CONTROL - CONDICIONALES
//let miVariable = 'Pepita';

/* if (miVariable === 'Pepita') {
  console.log('SI se cumple la condición');
  console.log('te llamas Pepita!');
} */

/* if (miVariable === 'Pepita') {
  console.log('SI se cumple la condición');
  console.log('te llamas Pepita!');
} else {
  console.log('NO se cumple la condición');
  console.log('no te llamas Pepita!');
} */

/* const resultado = miVariable === 'Pepito' ? 'se cumple' : 'no se cumple';
console.log(resultado); */

/* const colombiano = false;
const mayorDe18 = true;
const mayorDe21 = true;

const respuesta =
  colombiano && mayorDe18
    ? 'es nacional y mayor de edad'
    : !colombiano && mayorDe21
    ? 'es extranjero y mayor de edad'
    : 'es extranjero y menor de edad';
console.log(respuesta); */

/* let miVariable = 3;

if (miVariable === 1) {
  console.log('eres el primero');
} else if (miVariable === 2) {
  console.log('eres el segundo');
} else {
  console.log('no eres ni el primero ni el segundo');
} */

/* const miConstante = 10;

switch (miConstante) {
  case 'negro':
    console.log('pintar el carro de negro');
    break;
  case 'azul':
    console.log('pintar el carro de azul');
    break;
  case 'rojo':
    console.log('pintar el carro de rojo');
    break;
  default:
    console.log('pintar el carro de blanco');
    break;
} */

// ESTRUCTURAS DE CONTROL - CICLOS
/* for (let i = 0; i < 4; i++) {
  console.log(i);
} */

/* for (let i = 0; i < 10; i++) {
  console.log(i + 1);
} */

/* let i = 10;

while (i < 4) {
  console.log(i);
  i++;
} */

/* let i = 0;

while (i < 4) {
  console.log(i + 1);
  i++;
} */

/* i = 10;

do {
  console.log(i);
  i++;
} while (i < 4); */

/* let continuar = true;

do {
  continuar = confirm('¿Quiere seguir jugando?');
  console.log('estoy jugando');
} while (continuar === true); */

// FUNCIONES
function miFuncionSinParametros() {
  console.log('Hola, soy una función sin parámetros');
}

//miFuncionSinParametros();

function miFuncionConParametros(parametro) {
  console.log(
    'Hola, soy una función con parámetros, estoy recibiendo como parámetro:',
    parametro
  );
}

//miFuncionConParametros(10);

/* function funcionDeclarada() {
  console.log('Soy una función declarada.');
}
funcionDeclarada(); */

/* const funcionExpresada = () => {
  console.log('Soy una función expresada.');
};
funcionExpresada(); */
