function calculator(a, b, operation){
    return operation(a, b)
}

function add(x, y){
    return x+y
}
function sub(x, y){
    return x-y
}
function mul(x, y){
    return x*y
}

console.log(calculator(5, 3,add ))
console.log(calculator(5, 3,sub ))
console.log(calculator(5, 3,mul ))