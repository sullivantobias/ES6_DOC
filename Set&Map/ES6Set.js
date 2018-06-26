let set = new Set();

set
  .add(10)
  .add("Second")
  .add({ thirdObject: "Hey" })
  .add([1, 2, 3]);

for (let i of set.values()) console.log(i);

console.log(set.has(10), set.has(11), set.has("Second"));
