const num = parseInt(process.argv[2]);

const placeValues = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Ten Lakh",
    10000000: "Crore"
};

if (placeValues[num]) {
    console.log(placeValues[num]);
} else {
    console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
}
