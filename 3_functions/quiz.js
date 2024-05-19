function minimal (a, b) {
  if (a < b) {
    return a
  } else {
    return b
  }
}
console.log(minimal(5, 3))

const findIndex = (array, x) => {
  return array.indexOf(x)
}
console.log(findIndex([2, 4, 6, 8, 10], 10))
