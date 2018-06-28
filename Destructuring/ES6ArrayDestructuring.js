/**
 * Destructuring Array
 *
 */

// Declare Array //
const ar = ["a", 1, "b", 2];

// Destructuring //
let [a, b1, , b2] = ar;

console.log(a, b1, b2); // a, 1, 2

let [x, y] = ar;

console.log(x, y); // a, 1

[x, y] = [y, x];

console.log(x, y); // 1, a
