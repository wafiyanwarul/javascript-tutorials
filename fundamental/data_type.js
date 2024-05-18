// UNDEFINED DATA TYPE
let x;
console.log(typeof(x));

// NUMBER DATA TYPE
let a = 100;
console.log(a);
let b = 12.575;
console.log(b);
let c = 5;
console.log(c+'\n');

// BIGINT DATA TYPE
/*Number hanya mencakup nilai dari -(2^53 - 1) hingga (2^53 - 1).*/
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* the difference output between bigInt and number data types
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

const bigIntButSmall = 7n;
console.log(bigIntButSmall);

// STRING DATA TYPE
let name = "Rizky";
console.log(typeof(name));
console.log(name);

const question = '"What do you think of JavaScript?" I asked';
console.log(question);

const answer = '"I think it\'s awesome!" he answered confidently'; //escape string
console.log(answer);

console.log("Windows path: C:\\Program Files\\MyProject");

let greet = "Hello";
let moreGreet = greet + greet; // concatenate two of separate text
console.log(moreGreet);

const meinName = "Wafiy";
console.log(`Hello, my name is ${meinName}.`); // string interpolation

// BOOLEAN DATA TYPE
let xA = true;
let yB = false;

console.log(typeof(xA));
console.log(typeof(yB));

const aa = 20;
const bb = 12;

let isGreater = aa > bb;
let isLess = aa < bb;

console.log(isGreater);
console.log(isLess);

// NULL DATA TYPE
let someLaterData = null;
console.log(someLaterData);

// SYMBOL DATA TYPE
const id = Symbol("id");
console.log(id);

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2); // unique identifier

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);
