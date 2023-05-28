//Array Declaration

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)
console.log(arr[3])


//Split function

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

companies[1] = "to be listed";
console.log(companies)

let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

//Functions for array manupulation. 

//fill
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

//concat
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

console.log(fruitsAndVegetables)


//Index of 

let index = fruitsAndVegetables.indexOf('banana')  // 0
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

const numbers2 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers2.lastIndexOf(2)) // 7
console.log(numbers2.includes(5)) // true
console.log(numbers2.includes(0)) // false
console.log(numbers2.toString())

//Join function

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

//slice Function

const numbers3 = [1,2,3,4,5]

console.log(numbers3.slice()) // -> it copies all  item
console.log(numbers3.slice(0)) // -> it copies all  item
console.log(numbers3.slice(0, numbers.length)) // it copies all  item
console.log(numbers3.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

//splice

const numbers4 = [1, 2, 3, 4, 5, 6]
numbers4.splice(2, 3, 9, 10, 11)
console.log(numbers4)  // -> [1, 2, 9, 10, 11, 6] //it removes three item and replace three items 

//push

const arr2  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr2)
// ['item1', 'item2','item3','new item']

//pop

const numbers5 = [1, 2, 3, 4, 5]
numbers5.pop() // -> remove one item from the end
console.log(numbers5) // -> [1,2,3,4]

//shift

numbers5.shift() // -> remove one item from the beginning
console.log(numbers5) // -> [2,3,4]
numbers5.unshift(0)
console.log(numbers5)

//reverse

numbers5.reverse() // -> reverse array order
console.log(numbers5) // [4, 3, 2, 0]

//Sorting arrays

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

//Arrays of Arrays

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]


//Appending two arrays
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let c = [...a, ...b] //[ 1, 2, 3, 4, 5, 3, 4, 5, 6 ]

let d = [a,b]        //[ [ 1, 2, 3, 4, 5 ], [ 3, 4, 5, 6 ] ]

let e = a + b;       //1,2,3,4,53,4,5,6
console.log(typeof e)//converts to string
