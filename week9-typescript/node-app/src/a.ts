import { max } from "@tensorflow/tfjs";

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

function callAfterDelay(callback: () => void, delay: number) {
    setTimeout(callback, delay);
}   //callback function with no parameters and void return type


interface User {
    firstName: string;
    lastName: string;
    age:number;
    email?:string;
};
function isLegal(user:User):boolean{
    if(user.age >= 18){
        return true;    }
        else return false;
}

isLegal({firstName:"John", lastName:"Doe", age:20}); // true
isLegal({firstName:"Jane", lastName:"Doe", age:16}); // false


type UserWithOptionalEmail = {
    firstName: string;  
    lastName: string;
    age: number;
    email?: string; // email is optional
};

type GreetArguments = number | string; // Greet can accept either a number or a string
function greety(id: GreetArguments) {
    if (typeof id === 'number') {
    return `Hello, ${id}!`;
}
}
//difference between interface and type
// Interface can be extended, while type cannot be extended in the same way
interface UserProfile {
    username: string;
    email: string;
}
interface ExtendedUserProfile extends UserProfile {
    age: number;
}
// Type can be used to create unions, while interface cannot
type UserStatus = 'active' | 'inactive' | 'banned';
// Type can be used to create intersections, while interface cannot
type UserWithStatus = UserProfile & { status: UserStatus };
// Type can be used to create mapped types, while interface cannot
type ReadonlyUserProfile = {
    readonly username: string;
    readonly email: string;
    readonly age: number;
};  
// Type can be used to create conditional types, while interface cannot
type IsString<T> = T extends string ? true : false; // Conditional type that checks if T is a string
// Type can be used to create utility types, while interface cannot
type PartialUserProfile = Partial<UserProfile>; // Utility type that makes all properties optional
// Type can be used to create a tuple type, while interface cannot
type UserTuple = [string, string, number]; // Tuple type representing a user with username, email, and age
// Type can be used to create a function type, while interface cannot
type UserFunction = (user: UserProfile) => string; // Function type that takes a UserProfile and returns a string
// Type can be used to create a generic type, while interface cannot
type GenericUser<T> = {
    data: T;
    status: 'success' | 'error';
}; // Generic type that can hold any data type and a status

function maxValue(arr:number[]):number{
    let max = arr[0]; // Initialize max with the first element of the array
    for(let i=1;i<arr.length;i++){

        if(arr[i] >max){
            max = arr[i]; // Update max if the current element is greater
        }
    }  
    return max; // Return the maximum value found 
}


interface UserWithId {
    id: number; // id is a required property    
    name: string; // name is a required property
    email?: string; // email is an optional property
    age?: number; // age is an optional property
}
function filterUser(users:UserWithId[]){
    return users.filter(user => user.age && user.age >= 18); // Filter users who are 18 or older
}