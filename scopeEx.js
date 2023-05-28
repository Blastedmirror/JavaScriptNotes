//Window Global

a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
console.log(a, b) // accessible

//Global

let c = 'React' // is a global scope it will be found anywhere in this file
let d = 100 // is a global scope it will be found anywhere in this file

//Local
//A variable declared as local can be accessed only in certain block code.
const printSUm = (function(){
    let a = 5;
    let b = 4; //Local scope
    console.log( 'sum', a+b)
})()
