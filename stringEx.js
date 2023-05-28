let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250

//Concatenation 

let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
console.log(fullName,'. I am', age, '. I live in ', country)

//Long string

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
console.log(`${a} is greater than ${b}: ${a > b}`)


//JS Functions : 

let js = 'JavaScript'
console.log(js.length) 
let firstLetter = js[0]
let lastLetter = js[js.length-1]
console.log(js.toUpperCase())
console.log(js.toUpperCase().toLowerCase())
console.log(js.substr(4,6))
console.log(js.substring(4,10))

let st = '  30 Days Of JavaScript   '
console.log(st.trim(' '))
console.log(st.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(st.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

console.log(st.includes('Days'))     // true
console.log(st.includes('days'))     // false - it is case sensitive!

console.log(st.replace('JavaScript', 'Python'))
console.log(st.charAt(3)) 
console.log(st.indexOf('a'))          // 6
console.log(st.indexOf('JavaScript')) // 13
console.log(st.lastIndexOf('a'))        // 16

country = 'Fin'
console.log(country.concat("land")) // Finland

let str = 'Love is the best to in this world'
console.log(str.startsWith('Love'))   // true
country = 'Finland'
console.log(country.endsWith('land'))

let ss = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(ss.search('love'))          // 2
console.log(ss.search(/javascript/gi))  // 7 //RegEx

//Regex

let patternOne = /love/     // with out any flag
let pattern = /love/gi   // g-means to search in the whole text, i - case insensitive

st = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(st.match(pattern))   // ["love", "love", "love"]

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]


let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

