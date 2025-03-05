
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);

let lengthFeet = 60;
let widthFeet = 40;
let feetToMeters = 0.3048; 

let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
let areaMeters = lengthMeters * widthMeters;
console.log(`Plot Size: ${lengthFeet}ft x ${widthFeet}ft = ${areaMeters.toFixed(2)} square meters`);

let numberOfPlots = 25;
let squareMetersToAcres = 0.000247105; 
let totalAreaAcres = (areaMeters * numberOfPlots) * squareMetersToAcres;
console.log(`Total area of ${numberOfPlots} plots = ${totalAreaAcres.toFixed(4)} acres`);
