import sum from './sum.js';
import { numbers, uniqueNumbers } from './uniq.js';

const a = 5;
const b = 7;
const result = sum(a, b);

console.log(`Result of sum function: ${a} + ${b} = ${result}`);
console.log(`Unique numbers from array [${numbers}] are ${uniqueNumbers}`);
