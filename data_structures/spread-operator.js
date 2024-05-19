// SPREAD OPERATOR
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1); // with [,]
console.log(...arr1); // without [,]

console.log(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4]);

// example
const delicious = ["Seafood", "Salad", "Nugget", "Soup"];
const bakery = ["Cake", "Pie", "Donut"];

const allFood = [...delicious, ...bakery];

console.log(allFood);

// example
const obj1 = { firstName: 'Rey', age: 25 };
const obj2 = { lastName: 'Mord', gender: 'M' };

const allObj = { ...obj1, ...obj2 };

console.log(allObj);