// "use strict"

// const obj = {
//     name : "Evelune",
//     x : function(){
//         console.log(this)
//         console.log(this.name)
//     }
// }

// obj.x()


const person = {
    name : "Dewang"
}

function show(){
    console.log(this.name)
}

person.show = show
person.show()

