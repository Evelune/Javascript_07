const num = 400
console.log(num);
console.log(typeof num);



const numOne = new Number(100)
console.log(numOne);
console.log(typeof numOne);




let output = numOne.toString()
console.log(output);
console.log(typeof output);



const amount = 1000.73753

// Using toFixed() => to use take precision value after decimal point
console.log(amount.toFixed(2));


// using precision => this is use to take precise value of actual value
// example :
console.log(amount.toPrecision(4));



// 
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')); //en-IN is indian standards




// ++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-9));   //absolute is used to convert negative to positive oly

console.log(Math.round(4.6));  // Mostly used
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));



console.log(Math.max(2,3,5,3,5,6));
console.log(Math.min(2,3,5,3,5,6));



// Mostly used is Math.random()

const min = 1
const max = 6






