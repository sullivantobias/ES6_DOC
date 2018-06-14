// Declare a constant to be immutable
const imAConstant = "Hey";

// Try to change the value can't be possible
//imAConstant = "IHaveChanged"

/** Declare a scoped variable */
let block_scoped = "imBlockScoped";

/**Example block block-scoped variable
 * use in a for loop */

for (let index = 0; index < 1; index++) {
  console.log(index);
  let anotherBlockScopedVariable = 10;
  /**This code will return 10 because the console.log called is inside the scope of the for loop */
  console.log(anotherBlockScopedVariable);
}

/**Try to access to the scoped variable
 * but it will return undefined because
 * the called console.log is not in the scope of the variable declared
 */
console.log(anotherBlockScopedVariable);
