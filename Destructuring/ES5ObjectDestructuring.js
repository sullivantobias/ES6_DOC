var obj = {
  a: "a",
  b: "b",
  c: "c",
  switched: function switched() {
    this.a = this.b;
    return this.a;
  }
};

console.log(obj.a, obj.b, obj.c);

var a = obj.a,
  b = obj.b,
  c = obj.c,
  switched = obj.switched;

console.log(a, b, c, switched());

var ob = {
  one: 1,
  two: 2
};

var one = ob.one,
  two = ob.two,
  _ob$ten = ob.ten,
  ten = _ob$ten === undefined ? 10 : _ob$ten;

console.log(one, two, ten);
