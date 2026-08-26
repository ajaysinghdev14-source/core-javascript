class Cricketer {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.matchedPlayed = 0;
        this.stamina = 100;
    }

    introduced() {
        return `${this.name} is a ${this.role}, matched played ${this.matchedPlayed} and stamina ${this.stamina}`;
    }
}

const player1 = new Cricketer("Virat", "Batsman");
const player2 = new Cricketer("Rohit", "Batsman");

console.log(player1.introduced());
console.log(player2.introduced());

console.log(player1.hasOwnProperty("name"));
console.log(typeof Cricketer);

class Debutant {
    constructor(name) {
        this.name = name;
        this.walkOut = () => `${this.name} walk out to bat for the first time`;
    }
}

const debutant1 = new Debutant("Shumman");
console.log(debutant1.walkOut());

const somethingFromLastClass = debutant1.walkOut;
console.log(somethingFromLastClass());