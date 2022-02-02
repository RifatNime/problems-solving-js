const a = 5;
const b = 6;
const c = 7;

// console.log('Enter side1: ', a);
// console.log('Enter side2: ', b);
// console.log('Enter side3: ', c);

// const s = (a + b + c)/2;
// console.log('The semi-perimeter: ',s);

// var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log('The area of the triangle is: ',area);
////////////

function triangle(a, b, c){
    const s = (a + b + c)/2;
    console.log('The semi-perimeter: ',s);
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log('The area of the triangle is: ',area);

}

const perimetervalue = triangle(a,b,c);