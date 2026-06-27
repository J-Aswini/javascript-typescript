// const arr = [1,2,3,4,5]
// const tools = ['py', 'se','cy', 'ts']
// const [firstValue,      , thirdValue,fourthValue = "fourth index value" ] = tools
// console.log(fourthValue)
const obj = {
    name:'playwright',
    year:2020,
    moreInfo:{
        ownedBy: 'microsoft'
    }
}
const {year,name, moreInfo:{ownedBy}} = obj
// console.log(ownedBy)
console.log(moreInfo)

const arr = [1,2,3,4,5]
const tools = ['py', 'se','cy', 'ts']
const [firstValue,      , thirdValue,fourthValue = "fourth index value" ] = tools
console.log(fourthValue)
