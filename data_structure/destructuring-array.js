// DESTRUCTURING ARRAY - using square brackets [ ]

//example 1
const delicious = ['Seafood', 'Salad', 'Nugget', 'Soup']
const [firstFood, secondFood, thirdFood, fourthFood] = delicious

console.log(firstFood)
console.log(secondFood)
console.log(thirdFood)
console.log(fourthFood)

// example 2
const delicious1 = ['Meatball', 'Fried Rice', 'Geprek Chicken', 'Currie']
const [, , thirdFood1] = delicious1

console.log(thirdFood1) //output 'Geprek Chicken'

// Destructuring Assignment - in order to swipe value between two variables
let foodOne = 'Ice Cream'
let foodTwo = 'Noodles'

;[foodOne, foodTwo] = delicious1
console.log(foodOne)
console.log(foodTwo)

// before ES6 we do like this to swipe value between two variables manually:
var x = 3
var y = 7
var temp

console.log('Sebelum swap')
console.log('Nilai x: ' + x)
console.log('Nilai y: ' + y)

temp = x
x = y
y = temp

console.log('Setelah swap')
console.log('Nilai x: ' + x)
console.log('Nilai y: ' + y)

/* output
Sebelum swap
Nilai x: 3
Nilai y: 7
Setelah swap
Nilai x: 7
Nilai y: 3
*/

// after ES6 we can do like this automatically
x = 100
y = 500

console.log('Sebelum swap')
console.log('Nilai x: ' + x)
console.log('Nilai y: ' + y)

;[x, y] = [y, x] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

console.log('Setelah swap')
console.log('Nilai x: ' + x)
console.log('Nilai y: ' + y)

/* output
Sebelum swap
Nilai a: 100
Nilai b: 500
Setelah swap
Nilai a: 500
Nilai b: 100
*/

// Default Values

const seafood = ['Seafood']
// const [myFood, herFood] = seafood // this output will be undefined for herFood
const [myFood, herFood = "Salad"] = seafood // we can add manually like this


console.log(myFood)
console.log(herFood) 

/* output:
Seafood
undefined
*/
