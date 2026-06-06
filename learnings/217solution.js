//Local storage manager : you are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note objest and saves it to the browser's local storage
if(localStorage.getItem("name")){
    a = localStorage.getItem("name")
    document.write("welcome " + a)
}
else{
    
    let a = prompt("Enter your name")
    localStorage.setItem("name" , a);
    document.write("welcome " + a)
}


// in browser 

o = {"harry":1, "rohan":69}
JSON.stringify(o) //covverts in string , only string can be stored 
// '{"harry":1, "rohan":69}'
localStorage.setItem("men",JSON.stringify(o)) // setting item name
//undifine
localStorage.getItem("men") //get string
// '{"harry":1, "rohan":69}'
JSON.parse(localStorage.getItem("men")) //get object
// {"harry":1, "rohan":69}

//solution
