const conversionType = parseInt(process.argv[2]);
const value = parseFloat(process.argv[3]);

if (isNaN(value) || value < 0) {
    console.log("Please enter a valid positive number for conversion.");
    process.exit(1);
}

switch (conversionType) {
    case 1:
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
    case 2:
        console.log(`${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`);
        break;
    case 3:
        console.log(`${value} Inches = ${(value / 12).toFixed(4)} Feet`);
        break;
    case 4:
        console.log(`${value} Meters = ${(value / 0.3048).toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter a number between 1 and 4.");
}
