/**
 * We can set default value for parameters
 */

const defaultParameter = (a = 20, b = 45) => {
  return a + b;
};

console.log(defaultParameter());
