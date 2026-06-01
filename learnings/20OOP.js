/*let obj = {
    a:1,
    b:"Harry"
}
console.log(obj)
*/

/*let animal = {eats: true};
let rabbit = {jumps: true};  
rabbit.__proto__ = animal; //sets rabit.[[Prototype]]=animal
 
Output-
    rabbit
    {jumps: true}
    [[Prototype]]: Object
    eats: true
*/

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("Kha raha hun")
    }

    jumps(){
        console.log("Kood raha hun")
    }
}

let a = new Animal("bunny");
console.log(a)