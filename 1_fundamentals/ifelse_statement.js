const isRaining = true
console.log('Persiapan sebelum berangkat kegiatan.')

if (isRaining) {
  console.log('Hari ini hujan. Bawa payung.')
} else {
  console.log('Berangkat kegiatan.')
}

let x = 50

if (x > 70) {
  console.log(x)
} else {
  console.log('Nilai kurang dari 70')
}

let language = 'French'
let greeting = 'Selamat Pagi'

if (language === 'English') {
  greeting = 'Good Morning!'
} else if (language === 'French') {
  greeting = 'Bonjour!'
} else if (language === 'Japanese') {
  greeting = 'Ohayou Gozaimasu!'
}

console.log(greeting)

// condition ? true expression : false expression

const isMember = false
const discount = isMember ? 0.1 : 0
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

// Truthy & Falsy
let name = ' '

if (name) {
  console.log(`Halo, ${name}`)
} else if (name = ' '){
  console.log('Nama hanya spasi')
}


/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */
let score = 75;

function scoreChecker(score) {
  let result;

  // TODO
  if (score >= 90) {
    result = 'Selamat! Anda mendapatkan nilai A.';
  } else if (score >= 80 && score <= 89){
    result = 'Anda mendapatkan nilai B.';
  } else if (score >= 70 && score <= 79) {
    result = 'Anda mendapatkan nilai C.';
  } else if (score >= 60 && score <= 69) {
    result = 'Anda mendapatkan nilai D.';
  } else {
    result = 'Anda mendapatkan nilai E.';
  }

  // Jangan hapus kode ini
  return result;
}

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = scoreChecker;