//Two types -> 1. Function Declaration 2. Arrow Function

//Function Declaration

// function without parameter and return
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
}
  
addTwoNumbers() // a function has to be called by its name to be executed 


// function with parameter and return
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Pritam', 'Ganguly'))

//Function with many parameters
function profile(arr){
    const name = arr[0]
    const age = arr[1]
    const isDisabled = arr[2]
    const heightInCM = arr[3];
    console.log(name, age, isDisabled, heightInCM);
}
const bioData = ['Pritam Ganguly', 23, false, 180]
profile(bioData)

//Function with unlimited number of parameters
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

//Arrow with unlimited number of parameters. 
const sumOfAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  
  console.log(sumOfAllNums(1, 2, 3, 4)) // 10
  console.log(sumOfAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumOfAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

//Anonymous Function. 

const anonFuction = function(){
    console.log("Calling from an anonymous function")
}

anonFuction()

//Expression Function in other words anonymous functions with return statement

const square = function(n) {
    return n * n
}
  
console.log(square(2)) // -> 4

//Self Invoking function in other words anonymous function the are executed upon declaration

console.log((function(n) {
    console.log( "sq is " + n*n) // 4
})(2)) // undefined as function no returning anything.

//but instead of just printing if we want to return and store the data, we do as shown below  
let squaredNum = (function(n) {
    return n * n
})(10)
  
console.log(squaredNum)

//Arrow Function
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
}
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

//Function with default parameters
  
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

