const ar = ["a", 1, "b", 2]

let  [a,b1,,b2] = ar;

console.log(a,b1,b2)


let [x,y] = ar;

console.log(x,y);

[x,y] = [y,x]

console.log(x,y)

