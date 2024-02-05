// Buatlah 100 nilai random (1 sampai 50) pada 1 array
const randomArray = [];
const genapArray = [];
const ganjilArray = [];

// variabel untuk menampung hasil dari function min,max,total,average
let minValueGanjil;
let minValueGenap;
let maxValueGanjil;
let maxValueGenap;
let totalValueGanjil;
let totalValueGenap;
let averageValueGanjil;
let averageValueGenap;

for (let i = 0; i < 100; i++) {
    let number = Math.floor(Math.random() * 50) + 1;
    randomArray.push(number);
}

console.log("100 array random: ", randomArray)
console.log("panjang array: ", randomArray.length)

// - Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array

for (let indeks in randomArray) {
    if (indeks % 2 === 1) {
        ganjilArray.push(randomArray[indeks]);
    } else {
        genapArray.push(randomArray[indeks]);
    }
}

console.log("array indeks ganjil: ", ganjilArray)
console.log("panjang array indeks ganjil: ", ganjilArray.length)

console.log("array indeks genap: ", genapArray)
console.log("panjang array indeks genap: ", genapArray.length)

// - Gunakan 2 array yang telah dibuat untuk mendapatkan
// - Min
function minimalValue(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

minValueGanjil = minimalValue(ganjilArray)
minValueGenap = minimalValue(genapArray)
console.log("minimal value dari array ganjil: ", minimalValue(ganjilArray))
console.log("minimal value dari array genap: ", minimalValue(genapArray))

// - Max
function maximalValue(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

maxValueGanjil = maximalValue(ganjilArray)
maxValueGenap = maximalValue(genapArray)
console.log("maximal value dari array ganjil: ", maximalValue(ganjilArray))
console.log("maximal value dari array genap: ", maximalValue(genapArray))

// - Total
function totalValue(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

totalValueGanjil = totalValue(ganjilArray)
totalValueGenap = totalValue(genapArray)
console.log("total value dari array ganjil: ", totalValue(ganjilArray))
console.log("total value dari array genap: ", totalValue(genapArray))

// - Rata rata
function averageValue(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

averageValueGanjil = averageValue(ganjilArray)
averageValueGenap = averageValue(genapArray)
console.log("rata-rata value dari array ganjil: ", averageValue(ganjilArray))
console.log("rata-rata value dari array genap: ", averageValue(genapArray))

// - Bandingkan kedua buah array, contoh
function compareValue(nilaiDariGenap, nilaiDariGanjil) {
    if (nilaiDariGenap === nilaiDariGanjil) {
        return "kedua nilai sama";
    } else if (nilaiDariGenap > nilaiDariGanjil) {
        return "nilai dari genap lebih besar";
    } else {
        return "nilai dari ganjil lebih besar";
    }
}
// - Min lebih besar array genap
console.log("perbandingan minimal value: ", compareValue(minValueGenap, minValueGanjil))
// - Max lebih besar array ganjil
console.log("perbandingan maximal value: ", compareValue(maxValueGenap, maxValueGanjil))
// - Total memiliki nilai sama antara array genap dan ganjil
console.log("perbandingan total value: ", compareValue(totalValueGenap, totalValueGanjil))
// - Rata rata lebih besar array ganjil
console.log("perbandingan rata-rata value: ", compareValue(averageValueGenap, averageValueGanjil))