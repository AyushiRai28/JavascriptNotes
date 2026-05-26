// function getData(){
//        return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3000);
//        })
// }

// console.log("<<loading modules")
// console.log("Load data")
// // jab tk ye data load hoga tb tk toh neeche wala code run ho jaega sara jo hum nhi chahte toh naya tigdam lagaenge
// /*let data = getData()
// console.log(data)

// console.log("process data")*/


// //tareeka 1
// let data = getData()
// data.then((v)=>{
//     console.log(data)
//     console.log("process data")
// })


//tareeka2
async function newdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(404)
        },3000);
    })
}

async function main(){
    console.log("loading modules")
    console.log("load data")
    let data = await newdata()
    console.log(data)
    console.log("process data")
    console.log("task3")
}

main()