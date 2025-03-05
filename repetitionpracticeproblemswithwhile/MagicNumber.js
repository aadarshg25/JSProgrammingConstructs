const prompt = require("prompt-sync")();

console.log("Think of a number between 1 and 100.");

let low = 1, high = 100;

while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let ans = prompt(`Is your number greater than ${mid}? (yes/no): `);
    
    if (ans === "yes") {
        low = mid + 1;
    } else {
        high = mid;
    }
}

console.log(`Your Magic Number is ${low}!`);
