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
