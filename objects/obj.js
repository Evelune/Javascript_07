

const lol = Symbol("chirag")

let user = {
    name : "Dewang",
    age : 23,
    love : "####",
    [lol] : "chirag"
}


console.log(user.name);
console.log(user["name"]);
console.log(typeof lol);



user["age"] = "Singh"
Object.freeze(user)
console.log(user);


