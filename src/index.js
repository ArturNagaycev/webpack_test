import sum from './sum.js';
import { numbers, uniqueNumbers } from './uniq.js';

const a = 10;
const b = 11;
const result = sum(a, b);

const someData = document.createElement('p');

someData.innerHTML = `Result of sum function: ${a} + ${b} = ${result}<br>Unique numbers from array [${numbers}] are ${uniqueNumbers}`;
document.body.appendChild(someData);
