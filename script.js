console.log("Hey welcome to javascript");
var a = 5;
var b = 6;
var c = "haary";

// var can not start with a number
// Harry and harry are diff

console.log(a);
console.log(a+b+8);
console.log(typeof a,  typeof b, typeof c);

a = a+1;
const a1 = 6;
//a1 = a1 + 6 //this wont work unlike 'a' as it is a constant



//let
let z = 7;
{
    let z = 66;
    console.log(z);

}
console.log(z)

// if this was done with var , it would show the latest given value, var is globally swwitched. Let is locally.