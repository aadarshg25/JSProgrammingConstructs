let numbers = [];
let sum = 0;

// Generate 5 random 2-digit numbers and calculate the sum
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 90) + 10; // Generates a number between 10 and 99
    numbers.push(randomNum);
    sum += randomNum;
}

// Calculate the average
let average = sum / numbers.length;

// Print results
console.log("Generated Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average.toFixed(2));
