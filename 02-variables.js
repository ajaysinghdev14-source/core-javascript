var shipName = "The Amber";
console.log("shipName: ", shipName);

let crewCount = 12;
console.log("crewCount: ", crewCount);
crewCount = 14;

const captainName = "Jack Sparrow";
console.log("Captain Name: ", captainName);
// captainName = "Dipesh";

if (true) {
  var leakyTreasure = "gold coins";
}

for (var i = 0; i < 10; i++) {
  //
}

for (let j = 0; j < 10; j++) {
  //
}

console.log("Leaky treasure: ", leakyTreasure);

let shipSpeed = 22;
let _privateLog = "secret";
let _ = "hello";
let $hello = "$Hello";
let MONGO_DB = "mongoDB";

const treasureChest = {
  gold: 100,
  rubies: 50,
  maps: 2,
};

treasureChest.gold = 150;
// treasureChest = { gold: 50 };  not allowed

const crewRoster = ["Alok", "Abhinav", "Tasnish"];
crewRoster.push("vraj");
crewRoster[0] = "ajay";
console.log("CrewRoster: ", crewRoster);

// crewRoster = ["something"];  // not allowed
