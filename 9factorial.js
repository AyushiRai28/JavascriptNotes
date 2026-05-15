let a = prompt("Enter the number you want to find factorial of : ")

// for (let index = 1; index < a; index++) {
//     const fact = index*1
//     console.log(fact)
//     // alert(`the result is ${fact}`)
    
// }
// alert(`the result is ${fact}`)

let arr=[]
for (let i = 1; i < a; i++) {
    arr.push(i)
    
}


const red = (a ,b) =>{
    return a*b
}

console.log(arr.reduce(red))