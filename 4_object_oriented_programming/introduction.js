// INTRODUCTION

// CAR IN OOP CASE AS AA OBJECT
// CAR CAN HAVE INSTANCES LIKE COLOR, BRAND, SPEED, NUMBER
// CAR ALSO CAN HAVE BEHAVIOR LIKE DRIVE, REVERSE, AND TURN

const car = {
  // properties
  brand: 'Ford',
  color: 'red',
  maxSpeed: 200,
  chassisNumber: 'f-1',
  // methods
  drive: () => {
    console.log('driving')
  },
  reverse: () => {
    console.log('reversing')
  },
  turn: () => {
    console.log('turning')
  }
}

console.log(car.brand) // Ford
console.log(car.color) // red
console.log(car.maxSpeed) // 200
console.log(car.chassisNumber) // f-1
car.drive() // driving
car.reverse() // reversing
car.turn() // turning

const myCar = {
  brand: 'Tesla',
  color: 'black',
  maxSpeed: 250,
  chassisNumber: 't-1',
  drive: () => {
    console.log('driving')
  },
  reverse: () => {
    console.log('reversing')
  },
  turn: () => {
    console.log('turning')
  }
}

const yourCar = {
  brand: 'BMW',
  color: 'white',
  maxSpeed: 300,
  chassisNumber: 'b-1',
  drive: () => {
    console.log('driving')
  },
  reverse: () => {
    console.log('reversing')
  },
  turn: () => {
    console.log('turning')
  }
}

// ALL THE EXAMPLES ABOVE AREN'T EFFECTIVE BECAUSE WE HAVE TO ALWAYS DECLARE VARIABLE AND BEHAVIOR EACH THE DIFFERENT OBJECT

