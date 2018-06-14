"use strict";

/** Declare arrow functions
 * With 1 parameter
*/
var returnSqr = function returnSqr(e) {
  return e * e;
};

/** With 2 parameters */
var secondReturn = function secondReturn(e, a) {
  return e * e * a;
};

/** You can return array like this */
var array = [1, 2, 3];

/** Returning the array */
var returnObj = function returnObj() {
  return array;
};

/**Mapping the array * 10 */
var mappingArray = array.map(function (x) {
  return x * 10;
});

/**Reduce the array */
var mappingEachSpot = array.reduce(function (x, y) {
  return x + y;
});

console.log(returnSqr(2)); // output 4
console.log(secondReturn(2, 10)); // output 40 
console.log(returnObj()); // output the entire array 
console.log(mappingArray); // output the entire array * 10 
console.log(mappingEachSpot); // output 6