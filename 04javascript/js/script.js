// Soy un comentario de una sola línea
/*
Soy un comentario
de varias
líneas
*/

//console.log('Hola, desde un archivo externo.');
//console.log('Window Object:', window);

/* Variables */
var nombreVariable1 = 'Hola';
nombreVariable1 = 'cambio de valor en la variable1';
//console.log(nombreVariable1);

let nombreVariable2 = 'Hello';
nombreVariable2 = 'cambio de valor en la variable2';
//console.log(nombreVariable2);

const nombreVariable3 = 'No se modifica, no cambia su valor inicial';
// nombreVariable3 = 'cambio de valor en la variable3';
//console.log(nombreVariable3);

/* const miConstante;
console.log(miConstante) */

let miVariable; // declaración de variable
//console.log(miVariable);

miVariable = 'Hi';
//console.log(miVariable);

/* TIPOS DE DATO */
let tdString = 'string o cadena de texto';
tdString = "string con una 'palabra' entre comillas";
tdString = 'string con una "palabra" entre comillas';
tdString = '10';
//console.log(tdString);

let tdNumber = 10.01;
tdNumber = 0x00;
tdNumber = 10;
//console.log(tdNumber);

let tdBoolean = true;
tdBoolean = false;
//console.log(tdBoolean);

/* Operador typeof */
//console.log(typeof tdString);
//console.log(typeof tdNumber);
//console.log(typeof tdBoolean);

/* Interacción */
let nombreUsuario = prompt('Ingresa tu nombre');
console.log(nombreUsuario);
let edadUsuario = prompt('Ingresa tu edad');
console.log(edadUsuario);

/* Concatenación */
let nombreYedad = nombreUsuario + ' ' + edadUsuario;
document.write(nombreYedad);
