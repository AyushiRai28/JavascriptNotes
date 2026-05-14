console.log("Functions")

function hello(name) {
    console.log("Hello " + name)
    console.log("Have a nice day dear " + name)
    
}

hello("ayushi")

function sum(a,b){
    console.log(a + b)
}

sum(10,78)

function sum1(a,b, c=3){
    return a + b + c
}

result1 = sum1(7,8)
result2 = sum1(2,5,4)
console.log("the sum is :" , result1)
console.log("the sum is :" , result2)


const func1 = (x)=>{
    console.log("I am an arrow function" , x)
}

func1(34)