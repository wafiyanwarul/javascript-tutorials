// VARIABLE SCOPE

/*
sometimes we need the variable almost in every script that we've made, but sometimes we need to use variable privately. thats's why we need variable scope to maintain our variable in our script 
*/

// example of scoping
// global variable, can be accessed from parent() dan child()
const a = 'a'

function parent () {
  // local variable, can be accessed from parent() dan child(), but not from the outside of the function
  const b = 'b'

  function child () {
    // local variable, can be accessed only from child() function.
    const c = 'c'
  }
}

// we should be carefull in use variable-scope in order to prevent the wrong result like in the below
function multiply (num) {
  total = num * num
  return total 
  /* 
  because we don't declare the 'total' with 'let' or 'const',
  the variable of 'total' change to the global variable  
  */
}

let total = 9
let number = multiply(20)

console.log(total)

/*
result is '400'
*/

// The more global variables we write, the higher the possibility of a collision occurring.