const obj = {
  a: "a",
  b: "b",
  c: "c",
  switched() {
    this.a = this.b;
    return this.a;
  }
};

console.log(obj.a, obj.b, obj.c);

const { a, b, c, switched } = obj;

console.log(a, b, c, switched());

const ob = {
  one: 1,
  two: 2
};

const { one, two, ten = 10 } = ob;

console.log(one, two, ten);
