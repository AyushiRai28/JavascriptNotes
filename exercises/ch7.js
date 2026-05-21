//Q. Create a navbar and change the color of it background to red
document.getElementsByClassName("nav")[0].style.backgroundColor = "red" ;
//or
document.querySelector(".nav").style.backgroundColor = "red";



//Q. Create a table without tbody Now use "view рage Source" button to check whether it has a tbody or not
// not shown in view sourse but shoen in inspect 
/*Important Concept
Browser automatically adds <tbody>
Even if you don’t write it in HTML
It appears in DOM (Inspect), not in source */



//Q. Create an element with 3 children Now change the color of first and last element to green
document.getElementsByClassName("box")[0].style.backgroundColor = "green";
document.getElementsByClassName("box")[2].style.backgroundColor = "green";
//or
let parent = document.getElementsByClassName("container");
parent.firstElementChild.style.color = "green";
parent.lastElementChild.style.color = "green";

//Q. Write code to change background of all <li> tags to cyan
let items = document.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "cyan";
}