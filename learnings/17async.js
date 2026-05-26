function getData(){
       return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        },3000);
       })
}

console.log("<<loading modules")
console.log("Load data")
let data = getData
console.log(data)

console.log("process data")