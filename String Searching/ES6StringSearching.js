let myText = "I'm a string test";

/** Using startsWith **/
console.log(myText.startsWith("I'm")); // true
console.log(myText.startsWith("I'm", 1)); // false

/** Using endsWith **/
console.log(myText.endsWith("I'm")); // false
console.log(myText.endsWith("test")); // true

/** Using includes **/
console.log(myText.includes("string")); // true
console.log(myText.includes("string", 13)); // false
