//the mirror mirror: imagine you have a string and you need to create a new string that is a mirror image of the original Write a function that appends the reversed version of the originl string to itself
let str = "Hey this is me"

function reverse(str) {
    let str2 = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 += str[i]; 
        
    }
    let result = str + str2;
    console.log(result)
}
reverse(str)