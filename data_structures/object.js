// OBJECTS

//RULES
let object = { key1: 'value1', key2: 'value2', key3: 'value3' }
console.log(object)

//EXAMPLE
const user = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  age: 19,
  isJedi: true
}

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`)
console.log(`Umur saya ${user.age} tahun`)

let userNew = {
  fullname: 'Wafiy Anwarul Hikam',
  age: 20,
  'home world': 'Indonesia'
}

console.log(`My name is ${userNew.fullname} \nI'm ${userNew.age} years old`)
console.log(`I come from ${userNew['home world']}`)

//EXAMPLE 2
const spaceship = {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1200,
  color: 'Light gray'
}

spaceship.name = "Milenium Hammer"; // change the value (DIFFERENT WITH REINITIALIZATION)
spaceship['manufacturer'] = "PT. Pindad Indonesia"
spaceship.maxSpeed = 1500;
spaceship.color = "Dark gray";
console.log(spaceship);

delete spaceship.manufacturer;
console.log(spaceship);


