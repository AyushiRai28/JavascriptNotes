// Q. What will the following print in Jawascript-  console.log(" har\"". length)
// lenght of har" i.e 4

// Q. Expore the includes, startsWith & endsWith functions of a string.
let str = "Hello world";

console.log(str.includes("world")); // true
console.log(str.includes("World")); // false (case-sensitive)
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world")); // false
console.log(str.endsWith("world")); // true
console.log(str.endsWith("Hello")); // false

//Q. Exteact the amunt out of this string , " Please give Rs 1000"
let money = " Please give Rs 1000";
console.log(money.slice(15))
//or
let amount = money.trim().split(" ")[3];
console.log(amount);
//or
let amount1 = money.match(/\d+/)[0];
console.log(amount1);
//✔️ \d+ → finds one or more digits
//✔️ [0] → gets the matched value


//Q. Try to Change 4th charater of a given string. Were you able to do it.
let given = "ayushi";
let newGiven = given.replace("s" ,  "h");
console.log(newGiven)