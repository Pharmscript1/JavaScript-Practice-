// Numbers

const firstNumber = 5; 
const secondNumber = 10;

const result = firstNumber * secondNumber;

console.log(result);

//Booleans

const isCool = true; 

if(isCool) {
    console.log("Hi man, you're cool");
}

else {
    console.log("Hey man");
}

const age = 20;

console.log(age > 21);

//Undefined this means values have not been defined.
let x;
console.log(x);


//Null
null
let sex = null;

console.log(typeof null);

//Objects are used to group variable

const person = {
    name: "John",
    age: 25,
}

console.log( person.name);

//Array
const arr = [1,2,3,4];
console.log(typeof arr);

const date = new Date();

console.log( date);


//Statically typed languages can't hold value for any other variable once declared
// C is statically typed 
//Dynamically typed other variables can be assigned to it even after been declared
//Javascript is a dynamically typed programming language

let messages = "Hello, World!";

console.log(typeof messages);

messages = 5;

console.log(typeof messages);



