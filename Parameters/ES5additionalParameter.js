var spread = function spread(x, y) {
  return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2);
};
console.log(spread(10, 4, 45, false));
