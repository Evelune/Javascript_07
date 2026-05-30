


 function sayMyName(a,b){
    console.log(a + b);
}

sayMyName(3,4)



function totalCartPrice(...num1){
    return num1
}


let totalSum =totalCartPrice(2,3,4,5,4)

let sum = 0
totalSum.forEach((i)=>{
    sum = sum + i
})
console.log(sum);
