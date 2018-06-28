/**
 * Declaring object
 */
const obj = {
  a: "a",
  b: "b",
  c: "c",
  switched() {
    this.a = this.b;
    return this.a;
  }
};

console.log(obj.a, obj.b, obj.c); // a, b, c

/**
 * Destructuring
 */
const { a, b, c, switched } = obj;

console.log(a, b, c, switched()); // a, b, c, AND B (switched used)

const ob = {
  one: 1,
  two: 2
};

const { one, two, ten = 10 } = ob;

console.log(one, two, ten); // 1, 2, 10
