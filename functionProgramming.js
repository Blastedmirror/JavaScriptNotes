//ForEach

//Doesn't return anything
//Mostly used with console log

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element, i , arr ) => console.log(i+" -> "+element.toUpperCase()+ " in ["+ arr.join(", ")+"]"))


//Map

const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  const countriesToUpperCase = countries2.map((country , i , arr) => i+" => "+country.toUpperCase() + " in ["+ arr.join(", ")+"]")
  console.log(countriesToUpperCase)

//Filter

const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const passedOnes = scores.filter((scores) => (scores.score > 70))
console.log(passedOnes.map((scores)=>(scores.name)))


//Reudce - Reduce takes a callback function. 
//         The call back function takes accumulator, current, 
//         and optional initial value as a parameter
//         returns a single value.

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 10)

console.log(sum)

//Every 

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true

//find

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)

//findIndex
const ages = [24, 22, 25, 32, 35, 18]

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5

//Some

const areSomeTrue = bools.some((b) =>  b === true)
console.log(areSomeTrue) //true

//Sort

nums = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(nums.sort()) //[100, 3.14, 37, 9.81]
nums.sort(function (a, b) {
  return a - b
})

console.log(nums) // [3.14, 9.81, 37, 100]

nums.sort(function (a, b) {
  return b - a
})
console.log(nums) //[100, 37, 9.81, 3.14]
  
const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users) // sorted ascending


