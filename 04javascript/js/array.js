'use strict';
const arrObjVacio = new Array();
const arregloVacio = [];
const arrObj = new Array('elemento1', 'elemento2', 'elemento3');
const girls = ['ana', 'shopia', 'pepita'];
const boys = ['jon', 'pepito', 'eric'];
const arrAny = [1, '1', 'one', true, [], {}, 'one', ['e1', 'e2'], {a:1}];
const arr = ['el1', 'el2', 'el3', 'el4', 'el5', 'el6', 'el7', 'el8', 'el9'];
const decimos = [10, 20, 30]
const cientos = [100, 200, 300]
const menores18 = [14,15,16,17]
const mayores18 = [19, 20, 21, 22]
const numeros = [14,15,16,17,18,19, 20, 21, 22]
const nums = [1,2,3,4]
const pares = [2,4,6,8]
const impares= [1,3,5,7,9]
const desordenado = ['d', 'c', 'a', 'b']
const numDesordenado = [4, 1, 3, 2]

const unString = 'hola soy un string'

function esMayorA18(numero) {
  return numero > 18
}

// console.log(arrObjVacio);
// console.log(arregloVacio);
// console.log(arrObj);
// console.log(girls);
// console.log(arrAny);
// console.log(arr);

// console.log(arr);
// console.log(typeof arr);
// console.log(arr instanceof Array);

// console.log(arregloVacio.length);
// console.log(arr.length);

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[-1]);
// console.log(arr[4]);
// console.log(arr[arr.length - 1]);

// console.log(girls);
// console.log(boys);
// console.log(girls.concat(boys));

// console.log(arr);
// console.log(arr.copyWithin(2));
// console.log(arr.copyWithin(2, 0));
// console.log(arr.copyWithin(2, 4));

// console.log(arr);
// console.log(arr.entries());
// const retornado = arr.entries()
// console.log(retornado);
// console.log(typeof retornado);
// for (const i of retornado) {
//   console.log(i);
//   console.log(i instanceof Array);
// }

// console.log(decimos);
// console.log(decimos.every(esMayorA18));
// console.log(cientos);
// console.log(cientos.every(esMayorA18));
// console.log([218, 19, 20]);
// console.log([218, 19, 20].every(esMayorA18));

// console.log(arr);
// console.log(arr.fill('algo'));
// console.log(arr);

// console.log(numeros);
// console.log(numeros.filter(esMayorA18));
// console.log(numeros.filter((elemento) => elemento >= 18 ));
// console.log(numeros.filter((elemento) => elemento < 18 ));

// console.log(numeros);
// console.log(numeros.find(esMayorA18));

// console.log(nums);
// console.log(nums.forEach((elemento)=> console.log(elemento)));
// let resultado = 0
// console.log(resultado);
// nums.forEach((elemento) => resultado += elemento);
// console.log(resultado);

// console.log(unString);
// console.log(Array.from(unString));

// console.log(numeros);
// console.log(numeros.includes(18));
// console.log(numeros.includes(180));

// console.log(numeros);
// console.log(numeros.indexOf(18));
// console.log(numeros.indexOf(180));

// console.log(numeros);
// console.log(Array.isArray(numeros));
// console.log(Array.isArray(unString));

// console.log(arr);
// console.log(arr.join());
// console.log(arr.join(' '));

// console.log(arr);
// const retornado = arr.keys()
// console.log(retornado);
// for (const iterator of retornado) {
//   console.log(iterator);
// }

// console.log(arrAny);
// console.log(arrAny.lastIndexOf('one'));

// console.log(numeros);
// console.log(numeros.map(esMayorA18));

// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// console.log(arr);
// console.log(arr.push('nuevo elemento'));
// console.log(arr);

// console.log(pares);
// console.log(pares.reduce((total, actual) => total - actual));

// console.log(arr);
// console.log(arr.reverse());
// console.log(arr);

// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// console.log(arr);
// console.log(arr.slice(1, 3));

// console.log(numeros);
// console.log(numeros.some(esMayorA18));
// console.log(nums.some(esMayorA18));

// console.log(desordenado);
// console.log(desordenado.sort());
// console.log(desordenado);
// console.log(numDesordenado);
// console.log(numDesordenado.sort());
// console.log(numDesordenado);

// console.log(arr);
// console.log(arr.splice(0, 1));
// console.log(arr);

// console.log(arr);
// console.log(arr.toString());

// console.log(arr);
// console.log(arr.unshift('nuevo elemento'));
// console.log(arr);