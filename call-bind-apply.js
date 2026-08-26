// call and apply => basic chef (kitchen)
// bind => return a new function
//
//
//
function cookDish(ingredient, style) {
    return `${this.name} prepares ${ingredient} in ${style} style !`
}

const sharmaKitchen = {name: 'Sharma ji Kitchen'}
const guptaKitchen = {name: 'Gupta ji Kitchen'}

console.log(cookDish.call(sharmaKitchen, 'Panner and Spices', 'Muglai'))

const guptaOrder = ['Chole kulche', 'Punjabi Dhaba']
console.log(cookDish.apply(guptaKitchen, guptaOrder))

function reportDelivery(location, status) {
    return `${this.name} delivered ${location} in ${status} status`
}

const deliveryBoy = {name: 'Ranveer'}

console.log("Call: ", reportDelivery.call(deliveryBoy, 'Gurugram', 'On time'))
console.log("Apply: ", reportDelivery.apply(deliveryBoy, ['Gurugram', 'On time']))
console.log("Bind: ", reportDelivery.bind(deliveryBoy))
const bindReport = reportDelivery.bind(deliveryBoy, 'Gurugram', 'On time')
console.log("Bind: ", bindReport())