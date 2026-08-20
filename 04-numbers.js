const crewMember = 40;
const fuelTons = 142.42;
const light_speed = 299_888_999;

const infiniteRange = Infinity;
const negativeInfiniteRange = -Infinity;
const notANumber = NaN;

console.log(NaN === NaN);

console.log(1 / 0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.isInteger("mike"));
console.log(Number.isNaN(notANumber));

const fuelReading = "142.75 tons";
const sectorCode = "0xa3";
const countDown = "007";

console.log(parseInt(fuelReading));
console.log(parseInt(sectorCode));
console.log(parseInt(countDown));

const trustForce = 4.567;
console.log(Math.round(trustForce));
console.log(Math.floor(trustForce));
console.log(Math.ceil(trustForce));
console.log(Math.trunc(trustForce));

const temps = [-120, 43, 56, -23];
console.log(Math.min(temps));

console.log(0.1 + 0.2 === 0.3);

function almostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(almostEqual(0.1 + 0.2, 0.3));
