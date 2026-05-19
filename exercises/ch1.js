//Q. In javascript Create s variable of type sting and try to add a number to it

let s = "Hello";
let result = s  + 5;
console.log(result)

// output- Hello5



//Q. Use typeof operator to find the datatype of the stung in last question

console.log(typeof s);       // datatype of s
console.log(typeof result);  // datatype after adding number
 
//OUtput - string
//         string


//Q. Create a const objuct in javascript. Can you change it to hold a number later
const obj = {
  name: "Ayushi",
  age: 18
};
// Modifying properties ✅ allowed
obj.age = 20;
console.log(obj);

// output - { name: "Ayushi", age: 20 }
//but changing is not allowed 
// obj = 10;   // ❌ Not allowed

//Q. Try to add a new key to the const object in Problem 3
obj.sname = "rai";
console.log(obj);


//Q. Write va Is program to create a word-eaningductionary of 5' 'words.
// Creating a dictionary (object)
const dictionary = {
  apple: "A fruit that is sweet and crunchy",
  book: "A set of written pages",
  computer: "An electronic device used for computing",
  river: "A natural flowing water body",
  sun: "The star that gives us light and heat"
};
// Accessing meanings
console.log(dictionary.apple);
console.log(dictionary["book"]);
// Printing full dictionary
console.log(dictionary);

