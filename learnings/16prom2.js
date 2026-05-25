console.log('This is a promise');

let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if (a<0.5){

        reject("No random number was not supporting you")
    }
    else{setTimeout(() => {
        console.log("Yes I am done")
        resolve("harry")
    },1000);}
})



let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if (a<0.5){

        reject("No random number was not supporting you 2")
    }
    else{setTimeout(() => {
        console.log("Yes I am done 2")
        resolve("harry 2")
    },1500);}
})

let p3 = Promise.all([prom1 , prom2])

p3.then((a)=>{
    console.log(a)
}).catch((err)=>{console.log(err);
})
