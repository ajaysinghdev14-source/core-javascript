const carriage1 = ["veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySeats = Array(3);
console.log(threeEmptySeats);
console.log(threeEmptySeats.length);

const passenger = Array("veer", "ayush", "ravi");

const singlePassenger = Array.of(3);
console.log(singlePassenger);

const tainCode = Array.from("DUST");
console.log(tainCode);

const tempTrain = ["A", "B", "C", "D", "E"];
tempTrain.length = 3;
console.log(tempTrain.length);
console.log(tempTrain);
tempTrain.length = 7;
console.log(tempTrain.length);
console.log(tempTrain);

// push, pop, shift, unshift, splice
//
// concat, slice, flat

// const trainCopy = wholeTrain.slice();

//
// searching: index, indexOf, includes, find, findIndex
//

console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray("Ravi"));

// key points.
// 1. [], not like Array(4)
// 2. array are 0 based
// 3. Mutating methods: push, pop, shift, unshift, splice
// 4. non mutating methods: concat, slice, flat, flatMap
// 5. Searching: includes
// 6. Array.isArray()
