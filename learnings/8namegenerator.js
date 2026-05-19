/*
Create a business name generator by combining list of adjectives and shop name and another word.

adjectives:
crazy
amazing
fire

shop name:
engine 
foods
garments

another word:
bros
limited
hub
 */

// let adj = Math.random("crazy" , "amazing" , "fire")
// let shop = Math.random("engine" , "foods" , "garment ")
// let extra = Math.random("bros" , "limited" , "hub")

// // const new_name = adj , shop , extra ;

// console.log(`The random Business Name suggested is  ${adj} ${shop} ${extra} `)

// the above code doesn't works. Lets see Harrys solution

let rand = Math.random()
let first , second , third;

//lets generate the first number
if(rand<0.33){
    first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first="Fire"
}


//lets generate the second number

rand = Math.random()

if(rand<0.33){
    second = "Engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "Food"
}
else{
    second="Garment"
}


//lets generate the third number

rand = Math.random()

if(rand<0.33){
    third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited"
}
else{
    third="Hub"
}

console.log(`${first} ${second} ${third}`)