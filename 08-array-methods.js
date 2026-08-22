// this is array of objects
const orders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Chicken Tikka", price: 18, spicy: true, qty: 1 },
  { dish: "Margherita Pizza", price: 12, spicy: false, qty: 3 },
  { dish: "Veg Biryani", price: 16, spicy: true, qty: 2 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 1 },
];

const myData = orders.forEach((order, index) => {
  console.log(` #${index + 1} : ${order.qty}x ${order.dish}`);
});

// console.log(myData);
//
// map always returns a new array of strings
const receiptLines = orders.map((o) => `${o.dish}: $${o.price * o.qty}`);
console.log(receiptLines);

// filter returns array of objects
const spicyOrders = orders.filter((o) => o.spicy);
console.log(spicyOrders);

// reduce
//
const totalRevenue = orders.reduce((sum, order) => {
  return sum + order.qty * order.price;
}, 0);
console.log(totalRevenue);

const grouped = orders.reduce(
  (acc, order) => {
    const category = order.spicy ? "spicy" : "mild";
    console.log("category: ", category);
    acc[category].push(order.dish);
    return acc;
  },
  { spicy: [], mild: [] },
);
console.log(grouped);

const ticketNumbers = [100, 25, 3, 42, 8];
const sortedW = [...ticketNumbers].sort((a, b) => a - b);
console.log(sortedW);

const kitchenOrders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Butter Chicken", price: 20, spicy: true, qty: 1 },
  { dish: "Garlic Naan", price: 4, spicy: false, qty: 6 },
  { dish: "Tom Yum Soup", price: 11, spicy: true, qty: 2 },
  { dish: "Grilled Salmon", price: 24, spicy: false, qty: 1 },
  { dish: "Paneer Tikka", price: 15, spicy: true, qty: 3 },
  { dish: "Tiramisu", price: 8, spicy: false, qty: 2 },
];

const mildReport = kitchenOrders
  .filter((order) => !order.spicy)
  .map((order) => ({
    dish: order.dish,
    total: order.price * order.qty,
  }))
  .toSorted();
console.log(mildReport);
