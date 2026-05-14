
const api = "https://api.freeapi.app/api/v1/public/randomproducts"


// fetch return the promise object
const user = fetch(api);

console.log(user)

user.then(function(data){
    console.log(data);
    
})



// What is promise in js
// Js is the object represting the eventual completion or failure for the asychronus operation.





// Make sure you use return to succesffully pass to the next chain in the promise
createOrder(cart).then(function (orderID){
    return procedToPayment(orderID)
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function (paymentInfo){
    return updateWalletBalance(paymentInfo)
})



// ——————————————————— More Readable format———————————————
createOrder(cart).then(orderID => procedToPayment(orderID))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo =>updateWalletBalance(paymentInfo));