class User {
    constructor(firstName,lastName = "null",age=45){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let printName = function(){
    console.log(`Hello my name is ${this.firstName} ${this.lastName} and my age is ${this.age}`)
}

let user1 = new User("Dewang")
console.log(user1)

printName.call(user1)