console.log(brewPotion('water', '100ml'))

function brewPotion(ingredient, dose) {
    return `Brewing potion with ${ingredient} and ${dose}`
}

const mixElixir = function (ingredient) {
    return `Mixing elixir with ${ingredient}`
}

// no own 'this', no argument object
const distilEssence = (ingredient) => {
    return `Mixing essence with ${ingredient}`
}

function oldBrewingLogs() {
    console.log('Type: ', typeof arguments)
    console.log('Is Array: ', Array.isArray(arguments))
    const argsArray = Array.from(arguments)
    console.log(arguments)
    console.log('Args Array: ', argsArray)
}

oldBrewingLogs('sage', 'rosemary')

const arrowBrew = () => {
    try {
        console.log('Type: ', typeof arguments)
        console.log(arguments)
    } catch (e) {
        console.log('Error: ', e)
    }
}

arrowBrew('sage', 'rosemary')

let globalCount = 0;

function brewAndCount(name) {
    globalCount++;
    console.log('Global Count: ', globalCount)
}

brewAndCount('sage')
brewAndCount('rosemary')