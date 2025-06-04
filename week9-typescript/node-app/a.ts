// Function with typed parameter: firstName is explicitly typed as string
function greet(firstName: string) {
    console.log("Hello, " + firstName + "!");
}
greet("Alice");

// Function with typed parameters and return type: x and y are numbers, function returns a number
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(5, 10));

// Function with typed parameter and boolean return type: age is a number, returns a boolean
function isLegalAge(age: number): boolean {
    return age >= 18;
}

console.log(isLegalAge(20)); // true
console.log(isLegalAge(16)); // false


const  a=()=>{
    console.log("Hello from arrow function!");
} 
a(); // the arrow function

