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

// TIPOS DE DATO
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
console.log(tdBoolean); */

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

// CONVERSIÓN DE TIPOS
/* let numero = prompt('ingresa un número');
console.log(numero);
console.log('antes', typeof numero);
numero = Number(numero);
console.log('después', typeof numero);

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
/* let numero1 = parseInt(prompt('Ingrese el primer número:'));
let numero2 = prompt('Ingrese el segundo número:');
let numero3 = Number(prompt('Ingrese el tercer número:'));
numero2 = parseInt(numero2);

let resultado = numero1 + numero2 + numero3;
let resultado = numero1 + numero2;
console.log('el resultado de la suma es:', resultado);
resultado = numero1 - numero2;
console.log('el resultado de la resta es:', resultado);
resultado = numero1 * numero2;
console.log('el resultado de la multiplicación es:', resultado);
resultado = numero1 / numero2;
console.log('el resultado de la división es:', resultado); */

// PLANTILLAS DE CADENA DE TEXTO
/* const nombre = 'Pepita';
const apellido = 'Pérez';

const nombreApellido = nombre + ' ' + apellido;
const nombreApellido = `El apellido de ${nombre} es ${apellido}`;
console.log(nombreApellido); */
