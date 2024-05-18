// MAP
/*
Map is a data type that stores a collection of data in a key-value format like an object. The difference is that Map allows keys with any data type, compared to Object which only allows keys of type String or Symbol
*/

// declare map type
const myMap = new Map()

// example
const exMap = new Map([
  // use multi-dimensional array
  ['1', 'a String key'], //  the first element is key, and the second is value
  [1, 'a number key'],
  [true, true]
])

console.log(exMap)

/* output
  Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

// example 2
const capital = new Map([
  ['Jakarta', 'Indonesia'],
  ['London', 'England'],
  ['Tokyo', 'Japan']
])

console.log(capital.size) // get information about the large of the map
console.log(capital.get('London')) // to get value from the key of 'London'
capital.set('New Delhi', 'India') // to add new key and value
console.log(capital.size)
console.log(capital.get('New Delhi'))

/* output
  3
  England
  4
  India
   */

// example 3 - wrong example in use map
const wrongMap = new Map()
wrongMap['My Key'] = 'My Value'

console.log(wrongMap.has('My Key'))
console.log(wrongMap.delete('My Key'))
console.log(wrongMap)

/* output
false
false
 */

// MAKE SURE TO ALWAYS USE get(); and set(); methods IN USE MAP

// example map
const priceInJPY = 5000
const currency = new Map([
  ['USD', 14000],
  ['JPY', 131],
  ['SGD', 11000],
  ['MYR', 3500]
])

const priceInIDR = priceInJPY * currency.get('JPY')

console.log(priceInIDR) // Output: 655000
