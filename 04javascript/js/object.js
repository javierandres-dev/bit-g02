'use strict'
// console.log(window);
// console.log(window.document);
// console.log(document);

const objetoVacio = {}
const constructorObjVacio = new Object()
const constructorObj = new Object({llave1: 'valor1', llave2: 'valor2'})
const objetoLiteral = {llave1: 'valor1', llave2: 'valor2'}

const person = {
  firstName: 'pepita',
  lastName: 'pérez',
  id: 1000000,
  active: true,
  colors: ['white', 'black'],
  sons: [
    {
      firstName: 'pepa',
      lastName: 'pérez',
    },
    {
      firstName: 'pepito',
      lastName: 'pérez',
    }
  ],
  job: null
}

const person2 = person

const personaA = {
  nombre: 'pepita',
  apellido: 'pérez'
}

const personaB = personaA

const origen = {a: 1, b:2, c: 3, d:4}
const destino = {aa: 11, bb:22, cc: 33, dd:44}

// console.log(objetoVacio);
// console.log(typeof objetoVacio);
// console.log(objetoVacio instanceof Object);
// console.log(constructorObjVacio);
// console.log(constructorObj);
// console.log(objetoLiteral);

// console.log(person);
// console.log(person.id);
// console.log(person['firstName']);
// console.log(person.job);

// person.job = 'developer'
// console.log(person.job);
// console.log(person);

// console.log(person);
// console.log(person2);
// console.log(person === person2);
// person.job = 'develover'
// person2.job = 'testing'
// console.log(person === person2);
// console.log(person);
// console.log(person2);

// console.log(personaA);
// console.log(personaB);
// personaA.esDiferente = false;
// personaB.esIgual = true;
// console.log(personaA);
// console.log(personaB);

// console.log(personaA == personaB);
// console.log(personaA === personaB);
// const personaC = personaA;
// console.log(personaC == personaA);
// console.log(personaC === personaB);

// console.log(personaA);
// for (const key in personaA) {
//   console.log('llave:', key);
// }
// for (const key in personaA) {
//   console.log('valor:', personaA[key]);
// }

// console.log(personaA);
// console.log(Object.keys(personaA));

// console.log(personaA);
// console.log(Object.values(personaA));

// console.log(personaA);
// console.log(personaA.valueOf());

// console.log(origen);
//console.log(destino);
// const retornado = Object.entries(origen)
// console.log(retornado);