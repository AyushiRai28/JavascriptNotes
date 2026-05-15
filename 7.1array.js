let arr = [ 1, 13, 7, 11, 17]
let newArr = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
}

console.log(newArr)


let square = arr.map((e)=>{
    return e**2
})


console.log(square)

const greaterThanSeven = (e)=>{
    if(e>7){return true}
    return false
}

console.log(square.filter(greaterThanSeven))


//factorial
const red = (a ,b) =>{
    return a*b
}

console.log(arr.reduce(red))