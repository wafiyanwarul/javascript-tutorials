// OPERATORS

let a = 10;
let b = 2.5;
let c = 2;

console.log(a + b); // SUMMATION
console.log(a - b); // SUBTRACTION
console.log(a * b); // MULTIPLICATION
console.log(a / b); // DIVISION
console.log(a % b); // REMAINDER ('VALUE LEFT AFTER DIVISION')
console.log(a ** c + '\n'); // RANK

// INCREMENT AND DECREMENT
let postfix = 10;
console.log(postfix++); // 10
console.log(postfix); // 11

let prefix = 20;
console.log(++prefix  + '\n'); // 21

let x = 10;
let y = 5

x += y; // artinya -> x = x + y;
console.log(x);
x -= y; // artinya -> x = x - y;
console.log(x);
x *= y; // artinya -> x = x * y;
console.log(x);
x /= y; // artinya -> x = x / y;
console.log(x);
x %= y; // artinya -> x = x % y;
console.log(x);

// COMPARISON OPERATORS
let d = 10;
let e = 12;
let f = 10;

console.log(d < e);
console.log(d > e);
console.log(d <= e);
console.log(d >= e);
console.log(d == e); // artinya -> d is equal to e
console.log(d != e); // artinya -> d is not equal to e
console.log(d !== e); // artinya -> d is not equal to e (with the data type)
console.log(d === f); // artinya -> d is not equal to e (with the data type)

// EXAMPLE
const aString = '10';
const aNumber = 10
console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// LOGICAL OPERATORS
console.log('\n');
let xx = 10;
let yy = 12;

/* AND operator */
console.log(xx < 15 && yy > 10); // (true && true) -> true
console.log(xx > 15 && yy > 10); // (false && true) -> false

/* OR operator */
console.log(xx < 15 || yy > 10); // (true || true) -> true
console.log(xx > 15 || yy > 10); // (false || true) -> true

/* NOT operator */
console.log(!(xx < 15)); // !(true) -> false
console.log(!(xx < 15 && yy > 10)); // !(true && true) -> !(true) -> false