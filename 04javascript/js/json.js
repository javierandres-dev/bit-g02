'use strict'
/*
JSON literal
{
  "name": "pepita",
  "age": 20,
  "active": true,
  "children": ["pepito", "luis"]
}

Objeto de JavaScript
const javascriptObj = {
  name: "pepita",
  age: 20,
  active: true,
  children: ["pepito", "luis"]
}
console.log(javascriptObj);
*/

/* Deserialización */
console.log('Deserialización:');
let jsonString = '{"name": "pepita", "lastname": "pérez"}';
let jsObject = JSON.parse(jsonString)
console.log(jsonString);
console.log(typeof jsonString);
console.log(jsObject);
console.log(typeof jsObject);

console.log(jsObject.name);
console.log(jsObject['lastname']);

/* Serialización */
console.log('Serialización:');
jsObject = {name: "pepita", lastname: "pérez"}
jsonString = JSON.stringify(jsObject)
console.log(jsObject);
console.log(typeof jsObject);
console.log(jsonString);
console.log(typeof jsonString);
