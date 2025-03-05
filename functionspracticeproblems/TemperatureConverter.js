const prompt = require("prompt-sync")();

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log("Temperature Conversion:");
console.log("1: Celsius to Fahrenheit");
console.log("2: Fahrenheit to Celsius");

let choice = parseInt(prompt("Enter your choice (1 or 2): "));

switch (choice) {
    case 1:
        let degC = parseFloat(prompt("Enter temperature in Celsius (0°C - 100°C): "));
        if (degC >= 0 && degC <= 100) {
            console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit(degC).toFixed(2)}°F`);
        } else {
            console.log("Invalid input! Please enter a value between 0°C and 100°C.");
        }
        break;

    case 2:
        let degF = parseFloat(prompt("Enter temperature in Fahrenheit (32°F - 212°F): "));
        if (degF >= 32 && degF <= 212) {
            console.log(`Temperature in Celsius: ${fahrenheitToCelsius(degF).toFixed(2)}°C`);
        } else {
            console.log("Invalid input! Please enter a value between 32°F and 212°F.");
        }
        break;

    default:
        console.log("Invalid choice! Please enter 1 or 2.");
}
