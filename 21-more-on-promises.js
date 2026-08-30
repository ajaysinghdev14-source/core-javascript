const turant = Promise.resolve("Turant")
// console.log(turant)

const allPromise = Promise.allSettled([
    Promise.resolve("chai"),
    Promise.resolve("code"),
    Promise.reject(new Error("Rejected"))

])

// allPromise.then(console.log).catch(console.log)

const hPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Hello")
        reject(new Error("Rejected"))
    }, 3000)
})

async function nice() {
    try {
        const result = await hPromise
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

nice()

// const newResult = await hPromise
// console.log(newResult)