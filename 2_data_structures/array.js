// ARRAY
let arrayNew = ['Chocolate', 27.5, 24, true, 'This is Array']
console.log(arrayNew)
// array index started from 0
console.log(arrayNew[1]) // TO ACCESS INDEX INSIDE THEM

console.log(arrayNew[0])
console.log(arrayNew[1])
console.log(arrayNew[2])
console.log(arrayNew[3])
console.log(arrayNew[4])
console.log(arrayNew[5])
console.log('Panjang nilai arrayNew adalah ' + arrayNew.length + '.')

// modifying array

// PUSH METHOD - (ADD ITEM TO END OF ARRAY)
arrayNew.push('Add to end of Array')
console.log(arrayNew)

// POP METHOD - (TAKE THE LAST ITEM OF ARRAY)
arrayNew.pop()
console.log(arrayNew)

// UNSHIFT METHOD - (ADD ITEM TO THE BEGINNING OF ARRAY)
arrayNew.unshift('Add to the beginning of Array')
console.log(arrayNew)

// SHIFT METHOD - (TAKE ITEM FROM BEGINNING OF ARRAY)
arrayNew.shift()
console.log(arrayNew)

// DELETE METHOD - DELETE THE ITEM WITHOUT THE INDEX
delete arrayNew[1]
console.log(arrayNew)

// SPLICE METHOD - DELETE THE ITEM WITH THE INDEX
arrayNew.splice(1, 1) // delete item from array, index 1, 1 item
console.log(arrayNew)

// SPLICE ADD METHOD - ADD ITEM CUSTOM TO THE ARRAY
arrayNew.splice(1, 0, 'Splice')
console.log(arrayNew)

// Example Array with looping
let evenNumber = []
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i)
  }
}

console.log(evenNumber)
