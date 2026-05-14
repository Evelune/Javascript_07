const api = "https://api.freeapi.app/api/v1/public/randomproducts"


async function getDtat() {
    try {
        const data = await fetch(api)
        const jsonVlaue = await data.json()
        console.log(jsonVlaue)
    }
    catch (err){
        console.log(err)
    }
}


getDtat()