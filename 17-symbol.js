const aadhaar_of_mayur = Symbol('aadhar_of_mayur')
const aadhaar_of_piyush = Symbol('aadhar_of_piyush')

console.log(typeof aadhaar_of_mayur)
console.log(aadhaar_of_mayur === aadhaar_of_piyush)
console.log(aadhaar_of_mayur.toString())
console.log(aadhaar_of_mayur.description)

const nonIndian = Symbol();
console.log(nonIndian.description)

const biometricHash = Symbol('biometricHash')
const bloodGroup = Symbol('bloodGroup')

const citizenRecords = {
    name: 'Ved Pandey',
    age: 21,
    [biometricHash]: '1234567890',
    [bloodGroup]: 'O+',
}
console.log(Object.keys(citizenRecords))
console.log(Object.getOwnPropertySymbols(citizenRecords))

const rtiQueryBook = {
    queries: ['Infra budget', 'Ration card', 'Education budget', 'Startup laws'],
    [Symbol.iterator]() {
        let index = 0;
        const queries = this.queries
        return {
            next() {
                if (index < queries.length) {
                    return {value: queries[index++], done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}

for (const query of rtiQueryBook) {
    console.log(`Filing RTI: ${query}`)
}

const governmentSchema = {
    name: 'PM kisan yojna',
    people: 54,
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.name
        }
        if (hint === 'string') {
            return 88
        }
    }
}

console.log(+governmentSchema)
console.log(`${governmentSchema}`)