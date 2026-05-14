// call Method


// let name = {
//     firstName : "Dewang",
//     lastName : "Singh",
//     printFullName : function(){
//         console.log(this.firstName +" hehehe "+this.lastName);
        
//     }
// }


// let name2 = {
//     firstName : "Payal",
//     lastName : "Chirag"
// }

// //function borrowing
// name.printFullName.call(name2)


let name = {
    firstName : "Dewang",
    lastName : "Singh",
    
}

let printFullName = function(hometowm , state){
    console.log(this.firstName + " " + this.lastName + " from "+hometowm + " "+state)
}

let name2 = {
    firstName : "Payal",
    lastName : "Chirag"
}

//function borrowing
printFullName.call(name , "Agra", "UP")

// Apply Method
printFullName.apply(name , ["Agra", "UP"])


// Bind Method
let printMyName = printFullName.bind(name , "Agra", "UP")
console.log(printMyName);
printMyName()
