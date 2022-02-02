const phones = [
    {name: "sumsung s5", price: 45000, camera: 12, storage: 32},
    {name: "walton G8", price: 11090, camera: 16, storage: 24},
    {name: "Xaomi M3", price: 14090, camera: 16, storage: 48},
    {name: "oppo a2", price: 17090, camera: 11, storage: 18},
    {name: "nokia n95", price: 16090, camera: 16, storage: 48},
    {name: "htc h81", price: 25990, camera: 19, storage: 8},

];
let cheapest = phones[0];

for (const phone of phones){
    // console.log(phone);
    if(phone.price < cheapest.price){
        console.log('Mobile name: ', phone.name);
        cheapest.price = phone.price;
    }
}
console.log('Mobile Price: ', cheapest.price);
