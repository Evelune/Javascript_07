// const { connect } = require("react-redux")

const marvelHeros = ["Thor", "Ironman","spiderman",1,2,1,3]
const dcHeros = ["superman" , "flash" ,"batman"]


// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3]);



// concat
const ut = marvelHeros.concat(dcHeros)
console.log(ut);



// using spread operator
const newArray = [...marvelHeros, ...dcHeros]
console.log(newArray);



//flat method 
const an = [1,2,3,[1,4,2,1],[244,2,4,[34,2,4,2]],90]
console.log(an.flat(Infinity));



console.log(Array.from("Evelune"));
