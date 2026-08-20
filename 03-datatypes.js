const weaponName = "Flame Sword";
console.log("weaponName: ", weaponName, " | Type: ", typeof weaponName);

const attackPower = 75n;
const attackUpgrade = 1.5;

console.log(typeof attackPower);
console.log(typeof attackUpgrade);

const isLoggedIn = true;
let bonusEffect;

let curseStatus = null; // intentially absent

let weatherApiResponse = null; // null use-case

console.log("weatherApiResponse", typeof weatherApiResponse); // type of null = object - bug

const uniqueRuneId = Symbol("rune_of_fire");
console.log(uniqueRuneId);
console.log(typeof uniqueRuneId);
console.log(uniqueRuneId.toString());

const heroStats = {
  name: "Deepak",
  level: 12,
  class: "Ranger",
};

console.log("Hero: ", heroStats, " |Type: ", typeof heroStats);

const inventory = ["flame sword", "helath portion", "shield"];
console.log("Inventory: ", inventory, " | TypeOf: ", typeof inventory);

function castSpell() {
  return "Fireball";
}
console.log("Spell Type: ", typeof castSpell);

console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let originalHP = 100;
let cloneHP = originalHP;

cloneHP = 80;
console.log("original HP: ", originalHP);
console.log("clone HP: ", cloneHP);

const originalSword = {
  name: "Flame Sword",
  damage: 75,
  typeOfW: "Fire",
};

const cloneSword = originalSword;

console.log("original sword: ", originalSword);
console.log("clone Sword: ", cloneSword);

cloneSword.damage = 100;

console.log("after original sword: ", originalSword);
console.log("after clone Sword: ", cloneSword);

const armorOriginal = {
  name: "Iron Plate",
  defence: 80,
  buff: {
    fire: 10,
  },
};

const armorCopy = { ...armorOriginal };

console.log("armorOriginal: ", armorOriginal);
console.log("armorCopy: ", armorCopy);

armorCopy.defence = 100;

console.log(
  "after changing armorCopy values of armorOriginal: ",
  armorOriginal,
);
console.log("after changing armorCopy values of armorCopy: ", armorCopy);

armorCopy.buff.fire = 20;

console.log("after changing buff values of armorOriginal: ", armorOriginal);
console.log("after changing buff values of armorCopy: ", armorCopy);

const potionOriginal = { name: "Health", effects: { heal: 40, mana: 30 } };
const potionCopy = structuredClone(potionOriginal);

potionOriginal.effects.heal = 100;

console.log(potionOriginal);
console.log(potionCopy);

console.log(typeof null === "object");
Array.isArray(); // to check array

// all the primitives are copy by value
// all the objects are reference
