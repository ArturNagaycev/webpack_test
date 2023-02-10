const sum = require('./sum');
const { numbers, uniqueNumbers } = require('./uniq');

const a = 5;
const b = 5;
const result = sum(a, b);

console.log(`Result of sum function: ${a} + ${b} = ${result}`);
console.log(`Unique numbers from array [${numbers}] are ${uniqueNumbers}`);
