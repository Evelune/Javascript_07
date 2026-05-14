const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P1 Resolved")
    },5000)
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P2 Resolved")
    },10000)
});


// function getName() {
//     // JS Engine not wait for promise to get Resolve
//     p1.then((result)=>{
//         console.log("Running Promise 1")
//         console.log(result)
//         console.log("completed Promise 1")
//     })

//      p2.then((result)=>{
//         console.log("Running Promise 2")
//         console.log(result)
//         console.log("completed Promise 2")
//     })
//     .catch((err)=>{
//         console.error(err)
//     })
//     console.log("Started Function")
// }



async function getName() {
// await can only be used inside the async function

    console.log("Running")

    const res = await p1
    console.log(res)

    console.log("In Between...")

    const res2 = await p2
    console.log(res2)

    console.log("Ending")
}

getName();