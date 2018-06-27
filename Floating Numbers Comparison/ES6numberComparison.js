/** As we all know, JS is really weird sometimes
 ** If you try 0.1 + 0.1 + 0.1, it equals to : 0.30000000000000004
 ** The Number.EPSILON property represents the difference between the number 1
 ** and the smallest value greater than 1 that can be represented by a number in JavaScript.
 **/

console.log(0.1 + 0.1 + 0.1 === 0.3); // false
console.log(Math.abs(0.1 + 0.1 + 0.1 - 0.3) < Number.EPSILON); // true
