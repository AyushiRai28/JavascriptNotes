let arr = [1,2,3,4,5]

arr[0]=666;

console.log(arr);
console.log(arr.length);
console.log(arr[3]);
console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());
console.log(arr.shift());
console.log(arr.push(100));
console.log(arr.unshift("purple"));
console.log(arr);
console.log(delete arr[1]);
console.log(arr);


// splice(remove from index , remove to index , add , add ...)

let a = [1,2,3,4,5,6,7,8,9,10]
a.forEach((value, index , arr) => {
    console.log(value , index , arr)
});

let obj = {
    a : 1,
    b : 2,
    c : 3,
}

//forin

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(element)
}

// forof

for (const element of a) {
    console.log(element)
}