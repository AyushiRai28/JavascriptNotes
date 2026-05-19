/*  
document.body.childNodes
NodeList(7) [text, div.container, text, script, text, script, text]

document.body.childNodes[1]
<div class=​"container">​…​</div>​

document.body.childNodes[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild
<div class=​"container">​…​</div>​

cont = document.body.childNodes[1]
<div class=​"container">​…​</div>​

cont.lastElementChild
<div class=​"box">​Box 5​</div>​ 
*/

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"

document.getElementById("blue").style.backgroundColor= "blue"

document.querySelector(".box").style.backgroundColor = "green";
// selects first element with class box

//this create a collection and properties can not be set to a HTML collection 
document.querySelectorAll(".box")
//how to apply
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="pink"
})


