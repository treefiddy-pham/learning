//standard hello world
console.log('Hello World');

// declare module from other file 
//const sum = require('./tutorial.js');
const tutorial = require('./tutorial.js');
console.log(tutorial);

//v1
//console.log(tutorial(1,1));

//v2 with multiple modules exported from tutorial.js
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());