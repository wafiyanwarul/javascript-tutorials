// REUSABLE FUNCTION

// Array Map
// ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map(name => {
  return `${name}!`
})

console.log(newArray)

// Array Filter
/** the return of this function should be boolean type */

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter(item =>
  Boolean(item)
)

console.log(truthyArray)

// example :
const students = [
  {
    name: 'Harry',
    score: 60
  },
  {
    name: 'James',
    score: 88
  },
  {
    name: 'Ron',
    score: 90
  },
  {
    name: 'Bethy',
    score: 75
  }
]

const eligibleForScholarshipStudents = students.filter(
  student => student.score > 85 // siswa dengan nilai > 85 akan ditampilkan
)

console.log(eligibleForScholarshipStudents)

// Array Reduce
/** to execute reducer function for each element of array and only return one value
 *
 * arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
 * [...] adalah opsional parameter
 */

// example
const totalScore = students.reduce((acc, student) => acc + student.score, 0)

console.log(totalScore)

// Array Soome
/**
 * arr.some(callback(element, [index], [array]), [thisArg])
 * [...] adalah opsional parameter
 */

// example
const array = [1, 2, 3, 4, 5]
const even = array.some(element => element % 2 === 0)

console.log(even)

// Array Find
/**
 * arr.find(callback(element, [index], [array]), [thisArg]);
 * [...] adalah opsional parameter
 */

// example
const findJames = students.find(student => student.name === 'James')
console.log(findJames)

// Array sort
/**
 * arr.sort([compareFunction])
 * [...] adalah opsional parameter
 */

// example
const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121]
array1.sort()
console.log(array1)
// output: [ 1, 1000, 101, 121, 30, 4 ]

const compareNumber = (a, b) => {
  return a - b
}
const sorting = array1.sort(compareNumber)
console.log(sorting)

/**
output
[ 1, 4, 30, 1000 ]
**/

/**
 * Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).
 * Jika negative, maka `a` akan diletakkan sebelum `b`
 * Jika positive, maka `b` akan diletakkan sebelum `a`
 * Jika 0, maka tidak ada perubahan posisi.
 */

// Array every
/**
 * arr.every(callback(element, [index], [array])
 */

// example
const scores = [70, 85, 90]
const minimumScore = 65

const examPassed = scores.every(score => score >= minimumScore)
console.log(examPassed)

/**
output
true
**/

// Array for each

/*
imperative
const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`)
} */

// declarative
const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

names.forEach(name => {
  console.log(`Hello, ${name}!`)
})
 
for(let i = 0; i < names.length; i++) {
  if(names[i] === 'Jeff') continue; // Bisa!
  
  console.log(`Hello, ${names[i]}!`);
}
 
/*
names.forEach((name) => {
  if(name === 'Jeff') continue; // Tidak Bisa!
  console.log(`Hello, ${name}`);
});
*/