const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
const c = parseFloat(process.argv[4]);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter three valid numbers.");
    process.exit(1);
}

// Perform arithmetic operations
const op1 = a + b * c;
const op2 = a % b + c;
const op3 = c + a / b;
const op4 = a * b + c;

// Store results in an array
const results = [op1, op2, op3, op4];

const max = Math.max(...results);
const min = Math.min(...results);

// Print results
console.log(`Results:`);
console.log(`1. a + b * c = ${op1}`);
console.log(`2. a % b + c = ${op2}`);
console.log(`3. c + a / b = ${op3}`);
console.log(`4. a * b + c = ${op4}`);

console.log(`Maximum Value: ${max}`);
console.log(`Minimum Value: ${min}`);
