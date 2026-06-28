console.log("first")
setTimeout(()=>{console.log("second")}, 10000)
console.log("third")

// function getApiValue(){
//     const response = fetch('https://automationexercise.com/api/productsList').then(data=> {
//         return data.json()
//     })
//     return response
// }
// getApiValue().then((response)=> {
//     console.log(response)
// })


async function getApiValue() {
        const response =await  fetch('https://automationexercise.com/api/productsList')
    const data = await response.json()
    return data
    }
getApiValue().then((response)=> {
    console.log(response)
})