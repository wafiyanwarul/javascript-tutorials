// WeakMap & WeakSet

/*
WeakMap is a reference to a stored value. If a value stored in WeakMap is no longer accessible or can no longer be accessed, the reference to its memory will be deleted.
*/

let var1 =
  '* Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.'
let var2 =
  '* WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().'
let var3 =
  '* WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.'
console.log(
  `Yang membedakan antara map dan weakmap yaitu: \n${var1} \n${var2} \n${var3} \n`
)

// example 1
const visitsCountMap1 = new Map() // Menyimpan daftar user

function countUser (user) {
  let count = visitsCountMap1.get(user) || 0
  visitsCountMap1.set(user, count + 1)
}

let jonas1 = { name: 'Jonas' }
countUser(jonas1) // Menambahkan user "Jonas"

jonas1 = null // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountMap1)
}, 1000)

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

//weakmap
// const visitsCountMap = new WeakMap(); // Menyimpan daftar user
// const { inspect } = require('util');


// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// let jonas = { name: "Jonas" };
// countUser(jonas);  // Menambahkan user "Jonas"

// jonas = null;  // Data object "Jonas" dihapus

// // delay dibutuhkan untuk menunggu garbage collector bekerja
// setTimeout(function() {
//   console.log(inspect(visitsCountMap, { showHidden: true }));
// }, 10000);

/* output
  WeakMap {  }
*/

// more about weakmap "https://github.com/nodejs/node/issues/19001"

// Seperti halnya WeakMap, WeakSet adalah versi weak reference dari Set. Perbedaan antara WeakSet dan Set antara lain:

// WeakSet tidak bisa menyimpan nilai primitif.
// WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
// WeakSet tidak memiliki properti size.