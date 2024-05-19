// CLOSURE

/*
A function that can access variables within its lexical scope is called a closure
*/

function printIt () {
  const name = 'Ahmad Habibie' // Variabel lokal di dalam scope fungsi init

  function greet () {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`) // Memanggil variabel yang dideklarasikan di parent function
  }

  greet()
}

printIt()

// example 1
function init () {
  const name1 = 'Hatori'

  function hatGreet () {
    console.log(`Welcome back, ${name1}`)
  }

  return hatGreet
}

const testFunction = init()
testFunction()

/* output
  Halo, Obi Wan
   */

// example closure
const add = () => {
  let counter = 0
  return () => {
    return ++counter
  }
}

const addCounter = add()

console.log(addCounter())
console.log(addCounter())
console.log(addCounter())

/* output
  1
  2
  3
   */

console.log('\n')

let arrayNew = [2, 4, 6, 8, 10];
console.log(arrayNew[2]);
