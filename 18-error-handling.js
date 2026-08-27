function bootNavigation(mapLoaded) {
    try {
        console.log(`Is Navigation Loaded: ${mapLoaded}`)
        if (!mapLoaded) {
            throw new Error('Navigation is not loaded')
        }
    } catch (error) {
        return 'Nav-Ok'
    } finally {
        console.log('Navigation Booted')
    }
}

const status1 = bootNavigation(true)
const status2 = bootNavigation(false)
console.log(status1)
console.log(status2)