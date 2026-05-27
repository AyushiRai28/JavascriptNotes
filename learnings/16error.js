let a = Number(prompt("Enter first number : "))
let b = Number(prompt("Enter second number"))

// javascript has a forgiving nature , it wont show error so if you want it to show error you can throw error   
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed !!")
}
let sum = a + b
// or
let sum1 = parseInt(a) + parseInt(b)

console.log("the sum is ", sum)

// if you wont put number , it would take it as string
