// PROPERTY
class Car {
  #chassisNumber = null
  constructor (brand, color, maxSpeed) {
    // brand, color, maxSpeed, and chassisNumber is property
    this.brand = brand
    this.color = color
    this.maxSpeed = maxSpeed
    // Set a random chassis number
    this.#chassisNumber = this.#generateChassisNumber() // INTERNAL METHOD TO SIMPLIFY
  }

  get chassisNumber () {
    return this._chassisNumber
  }

  set chassisNumber (chassisNumber) {
    console.log('you are not allowed to change the chassis number')
  }

  // Methods
  drive () {
    console.log(`${this.brand} ${this.color} is driving`)
  }

  reverse () {
    console.log(`${this.brand} ${this.color} is reversing`)
  }

  turn (direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`)
  }

  #generateChassisNumber () {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`
  }
}

const car1 = new Car('BMW', 'red', 200)
const car2 = new Car('Audi', 'blue', 220)
const car3 = new Car('BMW', 'black', 250)

car3.chassisNumber = 'BMW-1'
// car1.#generateChassisNumber(); // it will caused an error

console.log(car1)
console.log(car2)
console.log(car3)

/* Output:
   Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
   Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
   Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
   */

// SETTER AND GETTER
class User {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName (fullName) {
    const [firstName, lastName] = fullName.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
}

const user = new User('John', 'Doe')
console.log(user)
console.log(user.fullName)

user.fullName = 'Fulan Fulanah'
console.log(user)
console.log(user.fullName)

/* Output:
  User { firstName: 'John', lastName: 'Doe' }
  John Doe
  User { firstName: 'Fulan', lastName: 'Fulanah' }
  Fulan Fulanah
  */

/*
  The ES2022 version of JavaScript comes with a private identifier feature. With this feature, we can create private property. This will solve the above problem. We will discuss private property in the Member Visibility material.
  */

// METHODS
class Mail {
  constructor (sender, receiver, subject, body) {
    this.sender = sender
    this.receiver = receiver
    this.subject = subject
    this.body = body
  }

  // Methods
  send () {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`)
  }

  sendLater (delay) {
    console.log(`Sending after ${delay} ms`)

    setTimeout(() => {
      this.send()
    }, delay)
  }

  saveAsDraft () {
    console.log('Saving mail as draft')
  }
}

// MEMBER VISIBILITY
