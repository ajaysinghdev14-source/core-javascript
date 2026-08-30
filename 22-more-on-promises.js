// console.log('mike')
// Promise.resolve('eleven').then(console.log)
// console.log('dustin')

function boilWater(ms) {
    return new Promise((resolve, reject) => {
        if (typeof ms === 'string' || ms < 0) {
            reject(new Error('Invalid input'))
        }
        setTimeout(() => {
            resolve('Water boiled')
        }, ms)
    })
}

boilWater(200).then(console.log).catch(console.log)

function grindLeaves() {
    return Promise.resolve('Leaves ground')
}

function steepTea(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tea steeped')
        }, time)
    })
}

function addSugar(spoons) {
    return `Added ${spoons} spoons of sugar`
}

grindLeaves()
.then(val)