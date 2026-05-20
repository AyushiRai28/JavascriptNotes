
//Write a program to print the marks of students in an object using for loop 
let obj = {
    harry: 98,
    rohan: 70,
    akash: 7
};

for (let key in obj) {
    console.log(key + " : " + obj[key]);
}