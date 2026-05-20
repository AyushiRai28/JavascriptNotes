
//Write a program to print the marks of students in an object using for loop 
let obj = {
    harry: 98,
    rohan: 70,
    akash: 7
};

let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i] + " : " + obj[keys[i]]);
}


// using for in
for (const key in obj) {
    console.log(key + " : " + obj[key]);
    
    
}


//Q. Program to show try agian untill correct number is placed
let correctNumber = 7;
let userInput = 5

while (userInput != correctNumber) {
    userInput = prompt("Enter the correct number:");
}

alert("You entered the correct number!");

//Write a function to find mean of 5 numiers
function mean(p,q,r,s,t) {
    m = (p+q+r+s+t)/5
    console.log(`the mean is: ${m}`)
}

mean(2,2,2,2,2)

//or
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;

let mean = (a + b + c + d + e) / 5;

console.log("Mean is:", mean);