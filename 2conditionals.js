console.log("Hello I am conditional tutorial")

let age = 0;
let grace = 2;

if (age>18){
    console.log("you can drive");
}

else if(age==0){
    console.log("are you kidding??")
}
else if(age==1){
    console.log("are you kidding??")
}
else{
    console.log("you can not drive");
}

a = 6;
b = 8;
let c = a>b ? (a-b):(b-a);

/*
translates to
if(a>b){
let c = a-b;}
else{let c = b-a}
*/