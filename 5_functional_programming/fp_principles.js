// FUNCTIONAL PROGRAMMING PRINCIPLES

/**
 * Pure Function
 * prohibited to depends the value outside the function or parameter
 * prohibited to change value even outside the function or parameter (no side effect)
 * */

// example impure function
let PI = 3.14 // PI is outside the function

const hitungLuasLingkaran = jariJari => {
  return PI * (jariJari * jariJari)
}
console.log(hitungLuasLingkaran(4)) // 50.24

PI = 5 // tidak sengaja nilai PI berubah
console.log(hitungLuasLingkaran(4)) // 80

// change to pure function
const luasLingkaran = jariJari => {
  return 3.14 * (jariJari * jariJari) // the value pi was inside the function right now
}

console.log(luasLingkaran(4)) // 50.24
console.log(luasLingkaran(4)) // 50.24
console.log(luasLingkaran(8)) // 200.96
console.log(luasLingkaran(8)) // 200.96

//example of side effect
const createPersonWithAge = (age, person) => {
  person.age = age
  return person
}

const person = {
  name: 'Bobo'
}

const newPerson = createPersonWithAge(18, person)

console.log({
  person,
  newPerson
})

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

// we can change by doing destructuring object to make a pure function
const createPersonWithAge1 = (age1, person1) => {
  return { ...person1, age1 }
}

const person1 = {
  name: 'Bobo'
}

const newPerson1 = createPersonWithAge1(18, person1)

console.log({
  person1,
  newPerson1
})

/**
 * make sure these are include on pure function :
 * - Returns the same value given the same input (parameter value).
 * - Depends only on the arguments provided.
 * - Does not produce side effects.
 */

/** Immutability
 * object can't to be change after created
 */

// example
const user = {
  firstname: 'Harry',
  lastName: 'Protter' // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user)

console.log(newUser)

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 *
 */

/** Recursive
 * call their own function
 */

// example
const countDown = start => {
  console.log(start)
  if (start > 0) countDown(start - 1)
}

countDown(10)

/** High-Order Function
 * JavaScript has First Class Functions, meaning functions can be treated like data. We can store functions in variables, pass them as parameters to other functions, and return functions from other functions.
 * High-Order Function is A function that can accept other functions as arguments, return a function, or both.
 * Usually used to :
 * - Abstracting or isolating an action, event, or handling asynchronous flow using callbacks, promises, and more.
 * - Creating utilities that can be used with various data types.
 * - Implementing techniques like currying or function composition.
 * Array map() is one example of the high-order function
 */

// example
const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index]
    if (!item) return newArray
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1)
  }

  return loopTrough(arr, action)
}

const newNames = arrayMap(names, name => `${name}!`)

console.log({
  names,
  newNames
})

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */
