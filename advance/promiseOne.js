const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise one is resolved")
    },1000)
})

promiseOne.then(function(res){
    console.log(res)
})