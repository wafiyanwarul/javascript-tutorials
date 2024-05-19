// FUNCTION PARAMETER

// example 1
function multiply (a, b) {
  return a * b
}

let result = multiply(3, 4)
console.log(result)

// example 2
const user = {
  id: 24,
  displayName: 'kren',
  fullName: 'Kylo Ren'
}

function introduce ({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`)
}

introduce(user)

// DEFAULT PARAMETER
function exponentsFormula (baseNumber, exponent = 4) {
  const result1 = baseNumber ** exponent
  console.log(`${baseNumber}^${exponent} = ${result1}`)
}

exponentsFormula(3)

/* output
  2^undefined = NaN
  */

// REST PARAMETER
function sum (...numbers) {
  let result = 0
  for (let number of numbers) {
    result += number
  }
  return result
}

console.log(sum(1, 2, 3, 4, 5))
