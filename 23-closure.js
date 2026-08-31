function startCompany() {
    function ca(name) {
        return `Name of your company is ${name}`
    }

    return ca
}

const getMeACompany = startCompany()
console.log(getMeACompany('Google'))

function eternal(guest) {
    const guestName = guest
    let count = 0

    function zomato() {
        console.log(`Hi, ${guestName}, from Zomato`)
    }

    function blinkit() {
        if (count === 1) return
        console.log(`Hi, ${guestName}, from Blinkit`)
        count++
    }

    return {
        zomato,
        blinkit
    }
}

const eternalJohn = eternal('John')
const eternalJane = eternal('Jane')

eternalJane.zomato()
eternalJane.blinkit()
eternalJane.blinkit()
eternalJane.blinkit()

const cups = ['green', 'red', 'blue']
// cups.map()