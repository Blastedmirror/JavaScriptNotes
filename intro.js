
//If we are printing text or string, it has to be inside single quotes, double quotes, or a backtick

console.log('Hello World')
console.log("Hello World again")
console.log(`Hello World again and againg`); 

// ; - at the end of line is not needed, however it will not count as error. 

//Arithmatic Operations
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3

//Variable Declaration. 

//const - Block-scoped and cannot be reassigned once they are assigned a value.
//        They must be initialized at the time of declaration

const value = 90;

//var   - Function-scoped or globally scoped.
//        They can be reassigned and accessed before they are declared 

var val;
val = 0;
val = 80;

//let   - Block-scoped as well but can be reassigned.
//        They also must be initialized at the time of declaration.  

() => {
    let grav = 90;
    grav = 88;
}


//Data Types

//Primitive 

// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

let word = 'JavaScript'
word[0] = 'Y'
console.log(word) //No change since strings are immutable

//Non-Primitive
let nums = [1, 2, 3] //Array
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
} //Object

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) //false
//Hence do not compare non-primitive data type.




// A valid JavaScript variable name must follow the following rules:

// A JavaScript variable name should not begin with a number.
// A JavaScript variable name does not allow special characters except dollar sign and underscore.
// A JavaScript variable name follows a camelCase convention.
// A JavaScript variable name should not have space between words.

//Valid : 
//firstName lastName isMarried
//first_name last_name
//num1 _num_1 $num1 year2020

//Invalid : 
// first-name
// 1_num
// num_#_1

//Assigning Variables 
// let nameOfVariable = value
// const gravity = 9.81


