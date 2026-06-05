// The sum selector : you are working on a function that should sum all numbers in an array untill it encounters a negative number.  
let arr = [ 2,4,6,8,-10,12,14]
function sumSelector(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<0){
            return  sum
        }
        sum += arr[i]
    }
    return sum
}

console.log(sumSelector(arr))