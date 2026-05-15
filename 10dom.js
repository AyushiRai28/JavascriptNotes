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