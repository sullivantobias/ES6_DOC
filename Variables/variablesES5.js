"use strict";

var imAConstant = "Hey";

var block_scoped = "imBlockScoped";

for (var index = 0; index < 1; index++) {
  console.log(index);
  var _anotherBlockScopedVariable = 10;

  console.log(_anotherBlockScopedVariable);
}

console.log(anotherBlockScopedVariable);
