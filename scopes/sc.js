//  Arrow Function

const user = {
    name : "Dewang",
    age : 24,
    emailID : "dewang@evelune.com",
    greet : function(){
        console.log(`Welcome ${this.name} your age is ${this.age} and yopur email id is ${this.emailId}`)
    }
}

user.greet()

Object.freeze(user)
user.name = "Evelune"
console.log(user);
