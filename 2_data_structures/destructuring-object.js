// JSON (Javascript Object Notation) - Most Popular Data Format Use in Data Transaction Now

/*[
    {
      "id": 14,
      "title": "Belajar Fundamental Aplikasi Android",
      "author": "Google ATP"
    },
    {
      "id": 51,
      "title": "Belajar Membuat Aplikasi Android untuk Pemula",
      "author": "Google ATP"
    },
    {
      "id": 123,
      "title": "Belajar Dasar Pemrograman Web",
      "author": "Dicoding Indonesia"
    },
    {
      "id": 163,
      "title": "Belajar Fundamental Front-End Web Development",
      "author": "Dicoding Indonesia"
    }
  ]*/

// Example Destructuring Object
// using object literal ({ })
const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18
}

const { firstName, lastName, age } = profile

console.log(firstName, lastName, age)

/* output:
  John Doe 18
  */

const profile1 = {
  firstName1: 'John',
  lastName1: 'Doe',
  age1: 18
}

let firstName1 = 'Dimas'
let age1 = 20

// menginisialisasi nilai baru melalui destructuring object
;({ firstName1, age1 } = profile1)

console.log(firstName1)
console.log(age1)

/* output:
  John
  18
*/

const profile2 = {
  firstName2: 'Ahmed',
  lastName2: 'Yemed'
}

const { firstName2, lastName2, age2 = 18 } = profile2

console.log(firstName2)
console.log(lastName2)
console.log(age2)

//Assigning to Different Local Variable Names
const profile3 = {
  firstName3: 'Amer',
  lastName3: 'Reeca',
  age3: 15
}

const {
  firstName3: localFirstName3,
  lastName3: localLastName3,
  age3: localAge3
} = profile3;

console.log(localFirstName3)
console.log(localLastName3)
console.log(localAge3)
