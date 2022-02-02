function isPrime(num){
    if(num == 2){
        return true;
    }
    else if(num > 1){
        for(var i = 2; i < num; i++){
            if(num % i !== 0){
                return true;
            }
            else if(num == i * i){
                return false;
            }
            else{
                return false;
            }
        }  
    }
    else{
        return false;
    }
}
console.log(isPrime(121));

// program to print prime numbers between the two numbers
const lowerNumber = 2;
const higherNumber = 10;

console.log('The prime numbers between', lowerNumber , ' and ' , higherNumber, ' are:');

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    // The first for loop is used to loop between the numbers provided by the user. In this case, from 2 to 10.
    // A variable flag is set to 0.
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}