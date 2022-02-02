const names = ['Abul','Babul','Kabul','Bulbul','Sabul','Nobel','Sohel','Polash','Roy', 'Habul','Kabul','Abul'];
function removeDuplicate(names){
    const unique = [];
    // for(let i = 0; i < names.length; i++){
    //     const element = names[i];
    //     // console.log(element);
    // }
    for (const element of names){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;

}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
////////////////////
const num = [1,2,3,4,5,7,9,1,8,2,4,4,6];
function removeDuplicate(num){
    const unique = [];
    for (const element of num){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;

}
const uniqueNum = removeDuplicate(num);
console.log(uniqueNum);