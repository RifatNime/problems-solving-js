 function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
     const perChairWood = 3;
     const perTableWood = 10;
     const perBedWood = 50;
     //wood calculation
     const chairWoodQuantity = chairQuantity * perChairWood;
     console.log('Chair: ', chairWoodQuantity);
     const tableWoodQuantity = tableQuantity * perTableWood;
     console.log('Table: ', tableWoodQuantity);
     const bedWoodQuantity = bedQuantity* perBedWood;
     console.log('Bed: ', bedWoodQuantity);
    //sum of totall wood
     const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
     return totalWood;
 }
 const mesure = woodCalculator(1, 1, 1);
 console.log("Total wood: ",mesure);