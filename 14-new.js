function TataCar(chassisNumber, modelNumber) {
    this.chassisNumber = chassisNumber;
    this.modelNumber = modelNumber;
    this.fuelLevel = 100;
}

TataCar.prototype.status = function () {
    return `Tata ${this.modelNumber} #${this.chassisNumber} | Fuel Level: ${this.fuelLevel}%`
}

const car1 = new TataCar("MH-1234", "Tata Nexon");
const car2 = new TataCar("MH-5678", "Tata Tiago");

console.log(car1.modelNumber)
console.log(car2.modelNumber)
console.log(car1.status())
console.log(car2.status())

// this is different from above
//
// this is factory functions
//
function createAutoRickshaw(id, route) {
    return {
        id,
        route,
        run() {
            return `Auto ${this.id} running on ${this.route}`
        }
    }
}

const auto1 = createAutoRickshaw('UP-1', 'Route A');
const auto2 = createAutoRickshaw('UP-2', 'Route B');

console.log(auto1.run())
console.log(auto2.run())