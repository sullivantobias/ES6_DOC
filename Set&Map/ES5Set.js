var set = {};

set[10] = true;
set["Second"] = true;
set[{ thirdObject: "hey" }] = true;
set[[1, 2, 3]] = true;

for (var i in set) if (set.hasOwnProperty(i)) console.log(set[i]);

console.log(set);
