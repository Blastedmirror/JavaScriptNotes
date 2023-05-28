const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
  let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
const [frontEnd, backEnd] = fullStack
  
console.log(frontEnd)
console.log(backEnd)

//Skip element

var names = ['Asabeneh', 'Brook', 'David', 'John']
let [, secondPerson, , fourthPerson] = names // first and third person is omitted
console.log(secondPerson, fourthPerson)

names = [undefined, 'Brook', 'David']
let [
  firstPerson1 = 'Asabeneh',
  secondPerson1,
  thirdPerson1,
  fourthPerson1 = 'John'
] = names

console.log(firstPerson1, secondPerson1, thirdPerson1, fourthPerson1)  

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

//During Interation

const fullStack1 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
  
for(const [first, second, third] of fullStack1) {
  console.log(first, second, third)
}



//Object destructuring

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

let { width, height, area = 400, perimeter = 60} = rectangle
console.log(width, height, area, perimeter)

let { width: w, height: h, area: a, perimeter: p = 40 } = rectangle
console.log(w, h, a, p)

const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]
    
for (const {task, time, completed} of todoList){ // {} in case of objects and [] in case of arrays
      console.log(task, time, completed)
}

//Spread Operator

//Spread operator to get the rest of array elements
const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]
  
let [gem, fra, , ...nordicCountries] = countries
  
console.log(gem)
console.log(fra)
console.log(nordicCountries)

//Spread operator to copy array
const frontEnd2 = ['HTML', 'CSS', 'JS', 'React']
const backEnd2 = ['Node', 'Express', 'MongoDB']
const fullStack2 = [...frontEnd2, ...backEnd2]

console.log(fullStack2)

//Spread operator to copy object

const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
}

const copiedUser = {...user}
const copiedUser1 = {...user, title:'instructor'}
console.log(copiedUser)
console.log(copiedUser1)

//Spread operator with arrow function

const sumAllNums = (...args) => {
    console.log(args)
}
  
sumAllNums(1, 2, 3, 4, 5)
  