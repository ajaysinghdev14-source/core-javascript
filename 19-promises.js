function prepareOrderCB(dish, cb) {
    setTimeout(() => cb(null, {dish, status: 'preparing'}), 100)
}

function pickUpOrderCB(order, cb) {
    setTimeout(() => cb(null, {...order, status: 'picked up'}), 100)
}

function deliveredOrderCB(order, cb) {
    setTimeout(() => cb(null, {...order, status: 'delivered'}), 100)
}

prepareOrderCB("Biryani", (err, order) => {
    if (err) return console.error(err)
    pickUpOrderCB(order, (err, order) => {
        if (err) return console.error(err)
        deliveredOrderCB(order, (err, order) => {
            if (err) return console.error(err)
            console.log(`${order.dish} is ${order.status}`)
        })
    })
})

// pending, fulfilled, rejected
//

function prepareOrder(dish) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!dish) {
                reject(new Error('No dish'))
            }
            console.log(`${dish} is ready`)
            resolve({dish, status: 'preparing'})
        }, 100)
    })
}

function pickUpOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${order} is ready`)
            resolve({...order, status: 'picked-up'})
        }, 100)
    })
}

function deliveredOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${order} is ready`)
            resolve({...order, status: 'delivered'})
        }, 100)
    })
}

prepareOrder('panner tikka')
    .then(order => pickUpOrder(order))
    .then(order => deliveredOrder(order))
    .catch(err => console.error(err))