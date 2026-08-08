const name = "Suresh";
const age = 24;

console.log(name + age + " ");
console.log(`Hello my name is ${name} and my age is about ${age} years`);
console.log("hello".toUpperCase());

console.log(`Position of character in name variable at position 2 is ${name.at(2)}`);
console.log(`Position of first character in name variable is ${name.charAt(0)}`);
console.log(`Char code of A is ${"ABC".charCodeAt(0)}`);
console.log(`${"hello world".indexOf("", 6)}`);

let text = "Hello world, welcome to the javascript universe.";
let result = text[2];
console.log(result);
console.log(text.indexOf("welcome"));
console.log(`Finding animal in text: ${text.indexOf("animal")}`);
console.log(text.startsWith("Hello") + " " + text.endsWith("universe."));
console.log(text.search(/to/));

let number = "123";
console.log(String(number).padStart(5, "0"));

let number2="345";
console.log(number2.padEnd(5,"0"));
console.log(number2.repeat(5));

//STRING DECOMPOSITION METHODS
 let text2 = "Hello world, welcome to the javascript universe.";
 console.log(text2.split(""));
 console.log(text2.slice(0,10));
 let text3="hello world    ";
 console.log(text3.trim());
 console.log(text3.trimStart());
 console.log(text3.trimEnd());