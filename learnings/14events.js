// list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML="Yeyy you were clicked , Enjoy your click"
})

button.addEventListener("contextmenu", ()=>{
    alert("blehh, no right clicks")

}) 

document.addEventListener("keydown", (e)=>{
    console.log(e)
})