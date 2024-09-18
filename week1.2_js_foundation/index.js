//variables in js
let a =1; // use let when you want the value to change
var b=2; //least used in real world
const c=3; // use const when you don't want the value to change

console.log(a); //printing function of js


let firstName="harkirat"; //string declaration
let age=18; //integer declaration
let isMarried=false; //boolean declaration

console.log("this person name is "+ firstName + " and their age is " + age + " the marraige status of the person is " + isMarried);  //combined way of printing

//conditionals
if(isMarried==true){
    console.log(firstName+ " is married");
}
else{
    console.log(firstName + " is not marraied");
}

//loops
let ans=0;
for(let i=0; i<10; i++){
ans= ans+i;
}
console.log(ans);


//complex primitives => ARRAYS AND OBJECTS

//ARRAYS
const ages= [24, 22, 21, 26, 29, 28]; //array declaration
const n=ages.length;//size of array in js
 
for(let i=0; i<n; i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}


//OBJECTS






//FUNCTIONS AS argument in FUNCTION

function calculateArithmetic(a,b,type){
    //calling back another function SUM/SUB
    if(type =="sum"){
        const value=sum(a,b);
        return value;
    }
    if(type=="minus"){
        const value=sub(a,b);
        return value;
    }
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
const value =calculateArithmetic(1,2,"minus");
console.log(value);


//SETTIMEOUTFUNCTION  => a function that cALLS a function and executes it after x seconds and written as x*1000
function greet(){
    console.log("Hello World");
}
setTimeout(greet,5*1000)




