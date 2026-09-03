function createOptimiseVersion(fn) {
    const cache = {}

    return function (...args) {
        const key = JSON.stringify(args)
        if (cache[key]) {
            return cache[key]
        }

        const result = fn(...args)
        cache[key] = result
        return result
    }
}

function add(a, b) {
    // 0.25 cpu
    return a + b;
}

function square(n) {
    return n * n
}

const optimizeAdd = createOptimiseVersion(add)

optimizeAdd(1, 2);
optimizeAdd(1, 2);
optimizeAdd(1, 2);
optimizeAdd(1, 2);

// 10M - add()

const optimizedSquare = createOptimiseVersion(square())

console.time('start code')
square(12255555)
console.timeEnd('start code')
console.time('start code')
square(12255555)
console.timeEnd('start code')
console.time('start code')
square(12255555)
console.timeEnd('start code')
console.time('start code')
square(12255555)
console.timeEnd('start code')
console.time('start code')
square(12255555)
console.timeEnd('start code')