
//————————————————————————————————————————————————————————————————————————————————————————
// this in global scope

// this keyword in the global space will always have the value of global object. 
// In case browser the value of global object is window and in case of node this global object value is global

console.log(this);      //global object return windon in console



//————————————————————————————————————————————————————————————————————————————————————————




// this inside a function
// this keyword behave different in strict or un strict mode 
function getData(){

    // the this value depend on the strict and non strict mode 
    console.log(this)
}

getData()

//————————————————————————————————————————————————————————————————————————————————————————

// The value of 
