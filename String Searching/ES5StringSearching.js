var myText = "I'm a string test";

console.log(myText.indexOf("I'm") === 0); // true
console.log(myText.indexOf("i'm") === myText.length - "i'm".length); // false
console.log(myText.indexOf("I'm") === 1); // false
console.log(myText.indexOf("test") === myText.length - "test".length); // true
console.log(myText.indexOf("string", 0) !== -1); // true
console.log(myText.indexOf("string", 13) !== -1); // false
