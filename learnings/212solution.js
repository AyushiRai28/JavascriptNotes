// you are tasked with writing a function that doubles each element in an arrat . however , there is a catch; if the array contains consecutive duplicate elements, only double one of them

let arr = [ 2,3,4,5,5,6,7,8]
let arr2 = []


let arr = [2, 3, 4, 5, 5, 6, 7, 8];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
        arr2.push(arr[i] * 2);   // double only one
        arr2.push(arr[i + 1]);   // keep the duplicate as is
        i++; // skip next element
    } else {
        arr2.push(arr[i] * 2);
    }
}

console.log(arr2);



// for (const key in arr) {

//     const element = arr[key]*2;
//     arr2.push(element)
    
    
// }