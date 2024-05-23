// QUIZ

// Definisi kelas Animal
class Animal {
  constructor (name, age, isMammal) {
    this.name = name
    this.age = age
    this.isMammal = isMammal
  }
}

// Definisi kelas Rabbit sebagai turunan dari Animal
class Rabbit extends Animal {
  constructor (name, age) {
    super(name, age, true) // isMammal selalu bernilai true
  }

  eat () {
    return `${this.name} sedang makan!`
  }
}

// Definisi kelas Eagle sebagai turunan dari Animal
class Eagle extends Animal {
  constructor (name, age) {
    super(name, age, false) // isMammal selalu bernilai false
  }

  fly () {
    return `${this.name} sedang terbang!`
  }
}

// Membuat instance dari kelas Rabbit
const myRabbit = new Rabbit('Labi', 2)

// Membuat instance dari kelas Eagle
const myEagle = new Eagle('Elo', 4)

// Menguji output
console.log(myRabbit.eat()) // Output: "Labi sedang makan!"
console.log(myEagle.fly()) // Output: "Elo sedang terbang!"
