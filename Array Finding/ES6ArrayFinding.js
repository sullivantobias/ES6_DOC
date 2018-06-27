let value = [];
let index = [];

/** We use find and finxIndex functions to retrieve the first element that math with the condition
 ** Here the condition is that the element must be more than 2
 **/

/** Find Value **/
value.push([1, 3, 4, 2].find(x => x > 2));

/** Find Index **/
index.push([1, 3, 4, 2].findIndex(x => x > 2));

console.log(value, index); // show [3], [1]
