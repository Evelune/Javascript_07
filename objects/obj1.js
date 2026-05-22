let user1 = {
    name : "Dewang",
    age : 24,
    emailId : "dewang@example.com"
}

let user2 = {
    name1 : "Evelune",
    age1 : 24,
    emailID : "evelune@example.com"
}

let user = Object.assign({},user1,user2)
console.log(user);



let newUser = {...user1,...user2}


let newuser = [
    {
        id : 1,
        phone : 687268972
    },
    {
        id : 2,
        phone : 687268972
    },
    {
        id : 3,
        phone : 687268972
    },
    {
        id : 4,
        phone : 687268972
    },
    {
        id : 5,
        phone : 687268972
    },
    {
        id : 6,
        phone : 687268972
    }
]


console.log(newuser[2].phone);

console.log(Object.keys(user));
console.log(Object.values(user));


console.log(Object.entries(user));

console.log(user.hasOwnProperty('age'));

