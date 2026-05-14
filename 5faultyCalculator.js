/*
create a faulty calculator using javascript

this faulty calculator does following:
1. It takes two numbers  as input from the user
2, It performs wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ----> **

it performs wrong operations 10% of the times
 */

let random=Math.random()
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

console.log(random)
if(random>0.1){
    console.log(`The result is ${a} ${c} ${b}}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    //correct calculation
}
else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    //wrong calculation
}