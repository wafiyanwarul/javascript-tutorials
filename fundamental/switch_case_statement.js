// SWITCH CASE STATEMENT

/*
switch (expression) {
  case value1:
    // do something
    break
  case value2:
    // do something
    ...
    ...
    break
  default:
  // do something else
}
*/

// example
let language = 'French'
let greeting = null

switch (language) {
  case 'English':
    greeting = 'Good Morning!'
    break
  case 'French':
    greeting = 'Bonjour!'
    break
  case 'Japanese':
    greeting = 'Ohayou Gozaimasu!'
    break
  default:
    greeting = 'Selamat Pagi!'
}

console.log(greeting)
