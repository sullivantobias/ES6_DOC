const one = ([text, number]) => console.log(text, number);

const two = ({ theText: text, theValue: number }) => console.log(text, number);

const three = ({ text, number }) => console.log(text, number);

one(["One", 1]);
two({ theText: "Two", theValue: 2 });
three({ text: "three", number: 3 });
