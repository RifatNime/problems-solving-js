function pizzaPanda(foodName, quantity){
    if(foodName.toLowerCase() != 'pizza'){
        return 'Sorry, We sell pizza only.';
    }
    else if(quantity >= 10){
        return 'You can order, But You have to wait.'
    }
    else if (quantity <= 0){
        return 'Sorry, Use positive number.'
    }

    var price = 10 * quantity;
    var message = "Your order Is successfull!!, \nOrder Info: \nFood Name: " + foodName + ",\nPrice: "+ price + '$'; 
    return message;
}
console.log(pizzaPanda("pizza", 1));
