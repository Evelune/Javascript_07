const users = [
    {firstName:'Evelune', lastName:'my love', age : 23},
    {firstName:'john', lastName:'li',age : 35},
    {firstName:'michael', lastName:'jackson',age:28},
    {firstName:'john', lastName:'li',age : 35},

]

const output = users.map((x) => x.firstName + " "+x.lastName)
console.log(output);



const newOutput = users.reduce(function (acc,curr){
    console.log(curr.age)
    if(acc[curr.age]){
        console.log(acc[curr.age]);
        acc[curr.age] = ++acc[curr.age]
    }
    else{
        console.log(acc[curr.age]);
        acc[curr.age] =1
    }
    return acc

},{})


console.log(newOutput);



const answer = users.filter((x)=> x.age === 23).map((x) => x.lastName)
console.log(answer);

