const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
  
const setOfLanguages = new Set(languages)
  
for (const language of setOfLanguages) {
    console.log(language)
}
  
const companies = new Set() // creating an empty set
  
companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')

console.log(companies)

//delete

console.log(companies.delete('Google'))

//has

console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

//clear
companies.clear()

//Union Of Sets

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//Intersection of Sets

a = [1, 2, 3, 4, 5]
b = [3, 4, 5, 6]

A = new Set(a)
B = new Set(b)

c = a.filter((num) => B.has(num))
C = new Set(c)

//Difference of Sets

d = a.filter((num) => B.has(num))
D = new Set(d)
console.log(D)




