var age = 20;
var vaccineCount = 2;
var isVaccinated = false;

console.log('Before Status', isVaccinated);

if (age > 20 && vaccineCount == 2){
    console.log('You may go foregine');
}

else if ((age > 15 && age <= 20) && vaccineCount == 0){
    console.log('Please teke first dose.');
}
else if ((age > 15 && age <= 20) && vaccineCount == 2){
    isVaccinated = true;
    console.log('Congratulations. You are vaccinated.');
}
else{
    console.log('Do registration for vaccine.');
}
console.log('After Status', isVaccinated);