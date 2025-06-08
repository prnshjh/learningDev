"use strict";
// Function with typed parameter: firstName is explicitly typed as string
function greet(firstName) {
    console.log("Hello, " + firstName + "!");
}
greet("Alice");
// Function with typed parameters and return type: x and y are numbers, function returns a number
function add(x, y) {
    return x + y;
}
console.log(add(5, 10));
// Function with typed parameter and boolean return type: age is a number, returns a boolean
function isLegalAge(age) {
    return age >= 18;
}
console.log(isLegalAge(20)); // true
console.log(isLegalAge(16)); // false
const a = () => {
    console.log("Hello from arrow function!");
};
a(); // the arrow function
function callAfterDelay(callback, delay) {
    setTimeout(callback, delay);
} //callback function with no parameters and void return type
;
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else
        return false;
}
isLegal({ firstName: "John", lastName: "Doe", age: 20 }); // true
isLegal({ firstName: "Jane", lastName: "Doe", age: 16 }); // false
