console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

// rules
/* 
for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
  // do something
}
*/

// example
for (let i = 0; i < 5; i++) {
  console.log(i)
}
// rules "for of loop"
/*
for(arrayItem of myArray) {
    // do something
  }
  */

let myArray = ['Luke', 'Han', 'Chewbacca', 'Leia']

for (const arrayItem of myArray) {
  console.log(arrayItem)
}

// WHILE LOOP
let i = 1

while (i <= 15) {
  console.log(i)
  i++
}

// DO WHILE

let ab = 1;

do {
  console.log(ab);
  ab++;
} while (ab <= 25);

// INFINITE LOOP
/*
let inf = 1;
 
while (inf <= 5) {
  console.log(inf);
}*/