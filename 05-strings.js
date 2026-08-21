const codeName = "Shadow Fox";
const backupName = String("Night Owl");
const templateName = `Agent ${codeName}`;

let intercepted = "HELLO";
intercepted[0] = "J"; // slient fail
console.log(intercepted);

const secretCode = "OMEGA-7";
console.log(secretCode.length);
console.log(secretCode.charAt(100));
console.log(secretCode.at(-3));
console.log(secretCode[99]);

const rawTransmission = "The Eagle has landed";
console.log(rawTransmission.toUpperCase());
console.log(rawTransmission.toLowerCase());

const message = "A drop point is at dock 7. Repeat: Dock 7";
console.log(message.indexOf("dock"));
console.log(message.includes("at"));

const orders = "move-north|hold-position|extract-vip";
let orderList = orders.split("|");
console.log("Split: ", orderList);

const myDataValue = "SOS".split();
console.log(typeof myDataValue);
console.log(Array.isArray(myDataValue));

const missionNumber = "42";
console.log(missionNumber.padStart(6, "x"));

// graphQL``  - tagged template literal

console.log(void 0);

const generalStore = {
  name: "Kirana",
  goods: 2,
};
console.log(generalStore);
// generalStore = undefined;

// slice vs substrings
let text = "JavaScript";
// 1. Normal usages (They behave exactly the same)
console.log(text.slice(0, 4)); // Java
console.log(text.substring(0, 4)); // Java

// 2. Edge case 1: Negative Numbers
console.log(text.slice(-6)); // "Script" (Counts from the end)
console.log(text.substring(-6)); // "JavaScript" (Treats -6 as 0)

// Edge case 2: Start index is greater then end index
console.log(text.slice(4, 0)); // " " emtpy string
console.log(text.substring(4, 0)); // "Java" (swaps them to 0, 4)

// INDEXOF() AND INCLUDES()
let sentence = "JavaScript is awesome";

// the old way (Pre ES-6)
console.log(sentence.indexOf("JavaScript") !== -1); // true

// The modern way (ES-6)
console.log(sentence.includes("JavaScript"));

// the trap (why indexOf cause bugs if you are not careful)
if (sentence.indexOf("JavaScript")) {
  console.log("Found it");
  // wait... this will not print
  // indexOf returns 0 and 0 is falsy value in javascript
}
