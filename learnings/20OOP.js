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

class Lion extends Animal{
    constructor(name){
        super(name)//calling the construstor of animal , warna error dega
        console.log("Its a lion .. BHAGO")  
    }

    eats(){
        super.eats()
        console.log("non veg kha rha hu")}

}
let a = new Animal("bunny");
console.log(a)
let l = new Lion("Sher")
console.log(l)