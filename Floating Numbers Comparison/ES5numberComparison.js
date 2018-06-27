/**
 * ES5 Epsilon, not very effective
 */

console.log(0.1 + 0.1 + 0.1 === 0.3); // false
console.log(Math.abs(0.1 + 0.1 + 0.1 - 0.3) < 2.220446049250313e-16); // true
