// Arrays

// Array is an object use to store collection of multiple items of different data types.

let arr = [0,1,2,3,5,6]
console.log(arr[1]);
console.log(arr.length);




// Array push method
arr.push(7)
arr.push(8)
console.log(arr);



// Array pop Method
arr.pop()
console.log(arr);


// Array unshift Method
arr.unshift(23)
console.log(arr);


// Array Shift Method
arr.shift()
console.log(arr);


// include method => it is used to check whether the element is present in the arr or not
console.log(arr.includes(3));

// indexOf method
console.log(arr.indexOf(3));


// join method
const newArr = arr.join()
console.log(arr);
console.log(arr);
console.log(newArr);
console.log(typeof arr);
console.log(typeof newArr);


// slice , splice
console.log("A" , arr);



const myarr = arr.slice(1,3)
console.log(myarr);
console.log("B " , myarr);

const myar = arr.splice(1,3)
console.log(myar);
console.log("C " , arr);




