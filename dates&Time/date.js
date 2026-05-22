// Dates

const myDates = new Date()
console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toLocaleString());
console.log(myDates.toISOString());

console.log(typeof myDates);

let newCreatedDate = new Date(2001,11,23)
console.log(newCreatedDate.toDateString());



let newDate = new Date("11-23-2001")
console.log(newDate.toLocaleString());
console.log(newDate.getTime());
// console.log(Date.Now(getTime()));




let todayDate = new Date()
console.log(todayDate);
console.log(todayDate.getDate());
console.log(todayDate.getMonth()+1);
console.log(todayDate.getFullYear());


