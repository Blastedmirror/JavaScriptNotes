let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

let regEx2= /love/gi  //another way

const str = 'I love JavaScript, I love it to very much'
const result = regEx2.test(str)
console.log(result) //true

const result2 = str.match(regEx2)
console.log(result2) // ["love"]

const result3 = str.search(regEx2)
console.log(result3)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/gi, 'JavaScript')
console.log(matchReplaced)
