/** Declare arrow functions
 * With 1 parameter
 */
const returnSqr = e => e * e;

/** With 2 parameters */
const secondReturn = (e, a) => e * e * a;

/** You can return array like this */
const array = [1, 2, 3];

/** Returning the array */
const returnObj = () => array;

/**Mapping the array * 10 */
const mappingArray = array.map(x => x * 10);

/**Reduce the array */
const mappingEachSpot = array.reduce((x, y) => x + y);

console.log(returnSqr(2)); // output 4
console.log(secondReturn(2, 10)); // output 40
console.log(returnObj()); // output the entire array
console.log(mappingArray); // output the entire array * 10
console.log(mappingEachSpot); // output 6
