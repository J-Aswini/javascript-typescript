const array = ['se', 'py', 'cy', 'cy']
array.push('ts', 'web')
// console.log(array)

const num = [1,2,3,4,5, 56.32,56, 67]
const oddNum =[]
const evenNum=[]

 for( let value of num)
 {
    if(value % 2 === 0){
        evenNum.push(value)
    }
    else{
        oddNum.push(value)
    }
 }
//  console.log(oddNum)
// console.log(evenNum)

// //pop() 
// evenNum.pop()
// console.log(evenNum)

//shift()
// oddNum.shift()
// console.log(oddNum)

//unshift()
// oddNum.unshift(999)
// console.log(oddNum)

// includes()
// if(num.includes(56)){
//     console.log('567 present in num array')
// }

// if(array.includes('se')){
//      console.log('se selected')
// }

//indexof
// console.log(array.indexOf('cy') + ' is index of cypress')

const num1 = [1,2,3]
const num2 = [3,4,5]
const result = num1.concat(num2, 6,7,8,9)
// console.log(result)

// //reverse()
// console.log('apply reverse method for result '+ result.reverse())

const nesArray = [1,2,[3,4,[5, [6,[7]]]]]
console.log(nesArray.flat(Infinity))

const fruits=['apple', 'banana','grapes']
console.log(fruits.join(' | '))