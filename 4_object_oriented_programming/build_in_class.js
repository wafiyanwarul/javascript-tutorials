// BUILT IN CLASS

// such as: Date, Object, Array, Math, dan String

// example build_in_class (date)
const date = new Date()

const timeInJakarta = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Jakarta'
})

const timeInTokyo = date.toLocaleString('ja-JP', {
  timeZone: 'Asia/Tokyo'
})

const timeInSeoul = date.toLocaleString('ko-KR', {
  timeZone: 'Asia/Seoul'
})

const timeInMakassar = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Makassar'
})

console.log(timeInJakarta)
console.log(timeInTokyo)
console.log(timeInMakassar)
console.log(timeInSeoul)

// example built_in_class (array)
// ubclass UniqueArray yang mewarisi class Array. Di dalam subclass UniqueArray, seperti berikut ini:
class UniqueArray extends Array {
  constructor (...args) {
    // make sure args is unique before passing it to super
    const uniqueValue = args.filter(
      (item, index) => args.indexOf(item) === index
    )

    super(...uniqueValue)
  }

  push (item) {
    // make sure only unique item is added
    if (!this.includes(item)) {
      super.push(item)
    }
  }
}

const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c')
console.log(someArray) // ['a', 'b', 'c']
someArray.push('d')
console.log(someArray) // ['a', 'b', 'c', 'd']
someArray.push('a')
console.log(someArray) // ['a', 'b', 'c', 'd']
