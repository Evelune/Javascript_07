const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise one is resolved")
    },1000)
})

// promiseOne.then(function(res){
//     console.log(res)
// })



const promiseTwo = new Promise(function(resolve,reject){
    // 
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName : "Dewang" , emailId : "dewang@example.com"})
        }
        else{
            reject("Promse Two is rejected")
        }
    },1000)
})


promiseTwo.then(function(result){
    console.log(result);
    return result.userName
    
})
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.error(error);
    
})
.finally(()=>{
    console.log("Done");
    
})



