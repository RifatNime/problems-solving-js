const products = [
    {name: 'laptop', price: 43990},
    {name: 'Shirt', price: 550},
    {name: 'watch', price: 3680},
    {name: 'phone', price: 55000},
    {name: 'food', price: 450},
];
let totalPrice = 0;
for(const product of products){

    totalPrice = totalPrice + product.price;
    
}
// console.log(totalPrice);
//eshop
let cartTotal = 0;
const cart = [
    {name: 'laptop', price: 43990, quantity: 1},
    {name: 'Shirt', price: 650, quantity: 8},
    {name: 'watch', price: 3680, quantity: 3},
    {name: 'phone', price: 55000, quantity: 1},
    {name: 'food', price: 450, quantity: 2},
];
for(const product of cart){
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);