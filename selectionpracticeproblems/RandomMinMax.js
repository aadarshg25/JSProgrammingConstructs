function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100; 
}

const numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomThreeDigitNumber());
}

console.log("Generated numbers:", numbers);
console.log("Minimum value:", Math.min(...numbers));
console.log("Maximum value:", Math.max(...numbers));
