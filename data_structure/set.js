// SET

/*
A simple set is a collection of values ​​(set of values). The thing that differentiates Sets from other data structures is that the data in Sets is not ordered and is not indexed. Apart from that, the data in the Set is also unique and there is no duplication.
*/

// example
const numberSet = new Set([1, 4, 6, 4, 1]); // set will automatically print the unique data and throw away if there is a duplication of data, like 1, and 4 in this set

console.log(numberSet);

/* output
Set(3) { 1, 4, 6 }
*/

// add() method to add data into the set
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);

/* output
Set(4) { 1, 6, 5, 10 }
*/
