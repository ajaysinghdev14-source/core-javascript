const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "volcanic glass",
};

const keys = Object.keys(artifact);
const values = Object.values(artifact);
const entries = Object.entries(artifact);
console.log(keys); // array
console.log(values); // array
console.log(entries); // array of arrays

for (const [key, value] of Object.entries(artifact)) {
  console.log(`${key}: ${value}`);
}

const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Crown", 30000],
  ["value", 50000],
];

const priceObject = Object.fromEntries(priceList);
console.log(priceObject);

const displayCase = {
  artificat: "Obsidian",
  location: "Hall A, Case 3",
  locked: true,
};

Object.freeze(displayCase);
delete displayCase.location;
displayCase.test = "new value";
console.log(displayCase);

const catelogEntry = {
  id: "ART-001",
  description: "Ancient Crows",
  verified: true,
};

Object.seal(catelogEntry);
