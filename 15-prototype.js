const prithviraj = {
    name: "Prithviraj",
    generation: "grandfather",
    cookTraditionalDish() {
        return `${this.name} cooks an ancient family recipe`
    }
}

const raj = Object.create(prithviraj)
raj.name = 'Raj'
raj.generation = 'father'
raj.runBusiness = function () {
    return `${this.name} runs the family business`
}
console.log(raj)

const ranbir = Object.create(raj)
ranbir.name = 'Ranbir'
ranbir.generation = 'son'
ranbir.makeFilms = function () {
    return `${this.name} makes films`
}

console.log(ranbir.makeFilms())
console.log(ranbir.runBusiness())
console.log(ranbir.cookTraditionalDish())

Array.prototype.last = function () {
    return this[this.length - 1]
}

console.log([1, 2, 3].last())