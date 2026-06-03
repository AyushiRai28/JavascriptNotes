let text = ["initializing hacking...",
     "reading your files...",
     "password files detected...",
    "sending all pswrds and prsnl files to seerver...",
    " cleaning up..."]

const randomDelay = ()=>{
    return new Promise((resolve, reject)=>{
        timeout = 1 + 6*Math.random()
        setTimeout(() =>{
            resolve()
        }, timeout);
    })
}   
for (const item of text){
    addItem(item)
}   

const addItem = async ()=>{
    
}