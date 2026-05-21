// Q. Create an array and take users input to add nummbers to it
// let arr = [];
// let n = prompt("How many numbers do you want to enter?");

// for (let i = 0; i < n; i++) {
//     let num = Number(prompt("Enter number " + (i + 1) + ":"));
//     arr.push(num);
// }

// console.log("Array is:", arr);

//Q. Keep adding numbers to the array in O until 0 is added to the array
let a= [];
let num;

while (true) {
    num = Number(prompt("Enter a number (0 to stop):"));  
    a.push(num);
    if (num === 0) {
        break;
    }
}
console.log("Array is:", a);

//Q. filter for numbers divisible by 10 from a Given array
let given = [10, 4, 60, 8]
let naya = given.filter((num)=>{return num%10 === 0});
console.log(naya)

// Q. Create an array of square of given numbers
let mera = [2,4,6,8,10]
let tera = mera.map((value)=>{return value*value})
console.log(tera)

//Q. Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)
let n = prompt("ENter thr number: ")
let nn = []
for (let i = 0; i < n; i++) {
    nn.push(i)
}
console.log(nn)
let fact = nn.reduce((a,b)=>{
    return a*b
})
console.log(fact)

