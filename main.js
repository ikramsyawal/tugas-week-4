// Buatlah 100 nilai random (1 sampai 50) pada 1 array
const randomArray = [];

for (let i = 0; i < 100; i++) {
    let number = Math.floor(Math.random() * 50) + 1;
    randomArray.push(number);
}

console.log("100 array random: ",randomArray)
console.log("panjang array: ",randomArray.length)