// pending, done(fulfill, resolve), nope(not, reject)
//

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('chai-code')
        reject(new Error('Something went wrong'))
    }, 2000)
});
console.log(promise)

// setTimeout(() => {
//     console.log(promise)
// }, 3000)

promise.then((data) => {
    return data.toLocaleUpperCase()
}).then(data => {
    return data + '!'
}).then(console.log).catch(error => console.log(error))

