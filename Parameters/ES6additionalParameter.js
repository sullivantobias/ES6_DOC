/**
 * You can add additional parameters
 * Here ...a is the additional parameter
 */

const spread = (x, y, ...a) => {
  return (x + y) * a.length; // We Multiply by the length of the number of parameters added.
};
console.log(spread(1, 2, "blabla", false, 56, 4 + 6));

/**
 * "blabla", false, 56, 4 + 6
 * They are the additional parameters
 */
