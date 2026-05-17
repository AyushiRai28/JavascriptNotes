let a = 6
function factorial(number){
    let arr = Array.from(Array(number+1).keys()) //to go till 6 not only 5
    console.log(arr.slice(1,)) //to not include 0
    let c = arr.slice(1,).reduce((a,b)=>{
                                    return a*b})
                                    
                                
}

factorial(a) // creates an arr of numbers  from 1 to a
console.log(c)