// DECLARING FUNCTION

// example 1
function multiply (x, y) {
  console.log(x * y)
}

multiply(20, 4)

// example 2
function greet () {
  console.log('Hi! Nice to meet you!')
}

greet()

// example 3
function division (a, b) {
  return a / b
}

let result = division(10, 5)
console.log(result)

// example 4
function greeting (name, language) {
  if (language === 'English') {
    return `Good Morning ${name}!`
  } else if (language === 'French') {
    return `Bonjour ${name}!`
  } else {
    return `Selamat Pagi ${name}!`
  }
}

let greetingMessage = greeting('John Doe', 'French')
console.log(greetingMessage)

