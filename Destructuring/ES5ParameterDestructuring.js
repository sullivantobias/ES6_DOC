function one(_ref) {
  var text = _ref[0],
    number = _ref[1];

  console.log(text, number);
}
function two(_ref2) {
  var text = _ref2.theText,
    number = _ref2.theValue;

  console.log(text, number);
}
function three(_ref3) {
  var text = _ref3.text,
    number = _ref3.number;

  console.log(text, number);
}

one(["One", 1]);
two({ theText: "Two", theValue: 2 });
three({ text: "three", number: 3 });
