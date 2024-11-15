// app.js

// Import the calculator module
const calculator = require('./calculator');

// Use the calculator functions
const number1 = 20;
const number2 = 10;

console.log(`sum of ${number1} and ${number2} is ${calculator.add(number1, number2)}`);
console.log(`Difference when ${number2} is subtracted from ${number1} is ${calculator.sub(number1, number2)}`);
console.log(`The product of ${number1} and ${number2} is ${calculator.mul(number1, number2)}`);
console.log(`The quotient when ${number1} is divided by ${number2} is ${calculator.div(number1, number2)}`);