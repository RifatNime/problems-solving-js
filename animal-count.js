function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if(miles <= 10){
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if(miles <= 20){
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;//first 10
        const restMiles = miles - 10;//first10
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;//after first 10
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;//after first10 + first 10
        return totalAnimals;
    }
    else{
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const RestDenseAnimal = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDenseAnimal;
        return totalAnimals;
    }
}
const animals = animalCount(35);
console.log(animals);


let sum=0; 
for( let i = 0; i<=3;i++)
{
     sum = i +sum; 
}
console.log(sum);
return sum;

