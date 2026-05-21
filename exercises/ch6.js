//Q. write a program using prompt function taking input of users age and alert them  if he can drive
//Use onfirm to ask the user if he wants to see the prompt again
//In the previous question use Console error to log the error if the age entered is negative
while (true) {
    let inp = Number(prompt("Please enter your age:"));

    if (inp < 0) {
        console.error("Age cannot be negative!");
        continue; // skip rest and ask again
    }

    if (inp >= 18) {
        alert("You can drive");
    } 
    else if (inp < 5) {
        alert("Are you kidding?");
        alert("You can't drive");
    } 
   
    else {
        alert("You can't drive");
    }

    let again = confirm("Do you want to check again?");
    
    if (!again) {
        break;
    }
}


//Q. Write a program to change the url to goggle.com (Redirection) if user enters a number greater than 4
let num = Number(prompt("Enter a number:"));

if (num > 4) {
    window.location.href = "https://www.google.com";
}

//Q.Change the background of the page to yellow red or any other Color based on user input through prompt
let colour = prompt("enter color of the page")
document.body.style.backgroundColor= colour;
