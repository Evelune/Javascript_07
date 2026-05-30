// for of

let arr = [2,3,4,5,6,7,8,9]
for (const val of arr) {
    console.log(val);
    
}


// Map

const map = new Map()
map.set('name' , 'dewang')
map.set('age' , 24)
map.set('mailId' , 'dewang@example.com')
// console.log(map);


// for (const [keys , value] of map) {
//     console.log(keys + " :- "+ value);
    
// }


const myobj ={
    name : "Dewang",
    age : 24,
    emailId : "dewang@example.com"
}

for (const key in myobj) {
    console.log(myobj[key]);
}


arr.forEach((items,index,arr) => {
    console.log(items + " "+ index + " "+arr);
    
});