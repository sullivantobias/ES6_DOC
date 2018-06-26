"use strict";

function age() {
  return 1;
}
console.log(age());
{
  var age = function age() {
    return 2;
  };

  console.log(_age());
}
console.log(age());
