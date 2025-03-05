const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 2) {
    console.log("Please enter a valid number greater than 1.");
    process.exit(1);
}

function primeFactors(n) {
    let factors = [];

    // Remove all factors of 2
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check for odd factors from 3 to √n
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If n is still prime and greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

console.log(`Prime factors of ${num}: ${primeFactors(num).join(", ")}`);
