// Buatlah 100 nilai random (1 sampai 50) pada 1 array
const randomArray = [];
const genapArray = [];
const ganjilArray = [];

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