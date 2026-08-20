const clue1 = "Muddy footprint near the window";
const clue2 = "Broke glass on the table";

console.log("Clue 1:", clue1);
console.log("Clue 2:", clue2);

const suspectName = "Dipesh";
const suspectAge = 20;
console.log("Suspect Name:", suspectName + " and age is " + suspectAge);

console.warn("Warning: Fingerprint evidence detected");
console.error("Error: Fingerprint evidence not found");

// array of objects
const evidenceLog = [
  { id: 1, item: "Muddy footprint", location: "Window sill" },
  { id: 2, item: "Broken glass", location: "Table" },
  { id: 3, item: "Fingerprint", location: "Door handle" },
];

console.table(evidenceLog);

console.group("Evidence Log");
console.log("My log 1");
console.log("My log 2");
console.groupEnd();

console.time("Time taken");
let dnaMatches = 0;
for (let i = 0; i < 1_000_000; i++) {
  dnaMatches += i;
}
console.timeEnd("Time taken");

console.log("chaicode");
console.log("chaicode");
console.log("chaicode");
console.log("chaicode");
console.log("chaicode");
