setInterval(() => {
    
}, 7000);

const addItem = async (item)=>{
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)}
    
    
    const randomDelay = ()=>{
        return new Promise((resolve, reject)=>{
            let timeout = 1 + 6*Math.random()
            setTimeout(() =>{
                resolve()
            }, timeout*1000);
        })
    }
let text = ["initializing hacking",
    "password files detected",
    "cleaning up",
    "sending all pswrds and prsnl files to seerver",
    "reading your files",]
 


const run = async () => {
    for (const item of text) {
        await addItem(item);
    }
}
run();

