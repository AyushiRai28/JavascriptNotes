//Q. Use logical operator to find whether the age of A perion lies between 10 and 20,
let age=30

if(age>10 && age<20){
    console.log("Valid age")
}

else{
    console.log("Invalid Age")
}

//Q. Demonstrate the use of switch case statements in Javascript
let grade = "B";

switch(grade) {
    case "A":
    case "B":
    case "C":
        console.log("Pass");
        break;
    case "D":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}

//another example
let a = 10;
let b = 5;
let operator = "+";

switch(operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    default:
        console.log("Invalid operator");
}


//Q. Write a Java Scrift program to find whether a number is Divisible by 2 and 3.
let num = 16
if(num%6===0){
    console.log("the number is divisible  by 2 and 3")
}

else{
    console.log("the number isnt divisible by 2 and 3")
}



//Q. Print You can Drive or You cannot Drive on age being greater than 18, using ternary operator
let umar = 20;
console.log((umar>=18)? "you can drive":"you cant drive");