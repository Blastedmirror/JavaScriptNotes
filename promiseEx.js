//CallBack use

const callbackFunc = (err, result) =>{
    if(err){
        return console.log(err)
    }
    else{
        return console.log(result)
    }
}

const doSomeThing = (callbackfunction) => {
    setTimeout(()=>{
        const skills = ["css", "js", "JAVA"]
        //callbackfunction("I have some issue", skills)
        //callbackfunction("", skills)
        callbackfunction(false, skills)
    },2000)
}

//doSomeThing(callbackFunc)

doSomeThing((err, result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})

//Promise : it lets asynchronous methods return values like synchronous methods.

//A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

//Promise Constructor

const doPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.includes("HTML")){
            resolve("Fullstack Developer")
        }
        else{
            reject("something went wrong")
        }
    }, 2000)
})

doPromise.then(result => {
    console.log(result)
}).catch(error=> console.log(error))

//Fetch API
 //Using Promise
const url = 'https://restcountries.com/v2/all' // countries api

// fetch(url)
// .then(response => response.json()) // accessing the API data as JSON
// .then(data => {
//     // getting the data
//     console.log(data)
// })
// .catch(error => console.error(error)) // handling error if something wrong happens

// Async and Await

const square = async function(n){ //s
    return n*n;
}


console.log(square(3))//return promise
// const ans = square(3).then(result =>console.log(result)).catch(err => console.log(err))
// console.log(ans)

var ans = 0;
(async () => {
    ans = await square(5)
    console.log(ans)
})()

//API calls with promise and async
//Using promise

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
})
.catch(error => console.error(error))

//Using async

const fetchDate = async () => {
    try{
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    }
    catch(err){
        console.log(err)
    }
}

fetchDate();




