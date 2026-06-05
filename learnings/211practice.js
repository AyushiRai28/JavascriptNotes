// The magical sorting hat : Imagine you are creating a magical sorting hat for a wizard school . implemnt a javascript  function that takes an array of students name and assigns them to one of the four houses (Gryffindot (length less than 6), hufflepuff(lenght less than 8), ravenclaw(length less than 12), Slytherin(grater than 12) based on the length of their names.

let students = ["Shubham " , "anjali" , "vyankateshwar" , "shivani" , "sugvaneshwaram" , "aryabhat" , "balakrishna", "annapurna" , "pikachu" , "kaif"]

let houses = []

for (const s of students){
    if(s.length <6){
        houses.push("gryffindor")
    }
    else if(s.length<8 && s.length>6){
        houses.push("Hufflepuff")
    }
    else if(s.length<12 && s.length>8){
        houses.push("Slytherin")
    }
    else if(s.length>= 12){
        houses.push("Ravenclaw")
    }
}

console.log(houses)