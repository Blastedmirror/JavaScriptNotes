//Functions which takes other functions as parameter or returns functions.

//Callback function is function that can be passed as parameter to other function


const multiplyByTwo = (n) => {
    return n ** 2
}

// function that takes other function as a callback

function cube(functionName, n) {
    return functionName(n) * n
}

console.log(cube(multiplyByTwo, 3))


// functions return function as a value​

const numbers = [1, 2, 3, 4, 5]

const addMethod = function(a, b) {
    return a+b;
}

const addArray = function(callback, arr){
    sum = 0
    arr.forEach((el) => {
        sum = callback(sum, el)
    });
    return (name)=>{
        return "My name is " + name + " and the sum is " + sum;
    }
}

console.log((addArray(addMethod, numbers))('Pritam Ganguly'))