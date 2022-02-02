var budget = 6000;
var hotelCost = 4000;
if (budget > 5000) {

    console.log("My!! Tour is on.");

    var remainingMoney = budget - hotelCost;

    console.log(remainingMoney);
  
    if (remainingMoney >= 2000) {
      console.log(" Barbique party hobe");
    } 
    else {
      console.log("shopping korbo");
    }
  
}
else {
    console.log("taka nai. tour na diye ghum dibo.");
}