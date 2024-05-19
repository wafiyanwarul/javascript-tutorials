// ARROW FUNCTION

/* REGULAR FUNCTION*/
// function declaration
function sayHello (greet) {
  console.log(`${greet}!`)
}
sayHello('Browdie')

// function expression
const sayName = function (name) {
  console.log(`Nama saya ${name}`)
}
sayName('Blacky')

/* ARROW FUNCTION - without 'function' keyword */
// function expression
const sayHello1 = greet1 => {
  console.log(`${greet1}!`)
}
sayHello1('WAFIY')

const sayName1 = name1 => {
  console.log(`Nama saya ${name1}`)
}
sayName1('Mickey')

// if want to use arrow function without parameter
// must use '()' and '=>' in the same time
const sayHello2 = () => {
  console.log('Hello!, Good Morning Everyone!')
}

sayHello2()

// we can delete '{}' if the body consist from only one line code
const nameIntro = yours => console.log(`Your name is ${yours}`)

nameIntro('Mickey');

const multiply = (x, y) => x * y;
console.log(multiply(10, 75));