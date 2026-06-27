// let arr1= [1,2,3]
// let arr2 = [2,4,5]
// console.log([...arr1, ...arr2])


// function sum(a, b){
//     console.log(a+b)
// }
// sum(2,1)

// function sub(a, b){
//     return a-b
// }
// // const result = 
// // console.log(result)
// console.log(sub(5,1))


// function sum1(...nums){
//     // console.log(nums)
//     return nums.reduce((a, b)=> a+b, 0)
// }
// sum1(1,2,3,4,5,6,6,7,8)

const array = ['se', 'py', 'cy', 'cy']
const [first, ...rest] = array
console.log(rest)