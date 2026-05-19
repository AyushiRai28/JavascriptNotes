console.log("i am a tutorial on loops")
//for loop
    let a = 1

    for (let i = 0; i < 100; i++) {
        console.log(a+i);
        
    }



//forin loop
    let obj ={
        name:"ayushi",
        role:"learner",
        company:"dhinchakPuja",
    }
    for (const key in obj) {
        const element = obj[key]
        console.log(key,element)  
    }

    // for (const key in obj) {
    //     if (!Object.hasOwn(obj, key)) continue;
        
    //     const element = obj[key];   
    // }


//forof loop
    for (const c of "Harry") {
        console.log(c)
    }



//while loop
    let i = 0;
    while(i<6){
        console.log(i)
        i++;
    }
    //output : 0 1 2 3 4 5

//do while loop
    s=0;
    do {
        console.log(s)
        s++;
    } while (s<6);    

