// FUNCTIONAL PROGRAMMING PARADIGM
/**
 * The programming paradigm where the computation process is based on pure mathematical functions.
 * focused on “what to solve” rather than “how to solve” as in the imperative style.
 */

// imperative style
const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

const newNamesWithExcMark = []

for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`)
}

console.log(newNamesWithExcMark)

// declarative style
const names1 = ['Harry', 'Ron', 'Jeff', 'Thomas']

const newNamesWithExcMark1 = names1.map(name => `${names1}!`)

console.log(newNamesWithExcMark1)
