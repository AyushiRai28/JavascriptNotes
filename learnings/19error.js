let a = Number(prompt("Enter first number : "))
let b = Number(prompt("Enter second number"))

// if you wont put number , it would take it as string
// javascript has a forgiving nature , it wont show error so if you want it to show error you can throw error   
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed !!")
}
let sum = a + b
// or
let sum1 = parseInt(a) + parseInt(b)

// console.log("the sum is ", sum)
//initially we will write this , lets try something else
try {
    console.log("the sum is ", sum*x)
} catch (error) {
    console.log("error aa gya bhaiii")
}    

