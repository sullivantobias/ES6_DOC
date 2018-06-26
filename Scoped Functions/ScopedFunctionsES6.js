function age() {
  return 1;
}
console.log(age()); // return 1
{
  function age() {
    return 2;
  }
  console.log(age()); // return 2
}
console.log(age()); // return 1
