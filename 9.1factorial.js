let a = 6
function factorial(number){
    let arr = Array.from(Array(number+1).keys()) //to go till 6 not only 5
    console.log(arr.slice(1,)) //to not include 0
    let c = arr.slice(1,).reduce((a,b)=>{
                                    return a*b})
    return c
  }

console.log(factorial(a)) // creates an arr of numbers  from 1 to a




function FacFor(number){
    let fac = 1;
    for (let i = 1; i <= number; i++) {
      fac = fac*i
    }
    return fac
}

console.log(FacFor(6))