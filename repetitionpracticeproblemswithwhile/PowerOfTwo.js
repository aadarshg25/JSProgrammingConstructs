const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

let power = 0;
let value = 1;

console.log(`Powers of 2 up to 2^${n} or 256:`);

while (power <= n && value <= 256) {
    console.log(`2^${power} = ${value}`);
    value *= 2;
    power++;
}
