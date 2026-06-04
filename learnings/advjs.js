// iife examplle
async function sleep() {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })   
}

//iife - imediately invoke function expression    
(async function main() {
    let a = await sleep()
    console.log(a)

    let b = await sleep()
    console.log(b)
})

// destructuring
let [x,y, ...rest] = [1,5,12,23,45,65]
console.log(x,y,rest)
//imp
let obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
let{a,b} = obj
console.log(a,b)


//spread
function sum(a,b,c){
    return a+b+c
}
let arr = [1,2,3]
console.log(arr[0] + arr[1] + arr[2])
console.log(sum(arr[0] , arr[1] , arr[2]))
console.log(...arr)