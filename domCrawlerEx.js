
const allHeaderTags = document.getElementsByTagName("h1");
const allTitleClass = document.getElementsByClassName('title')
const secondTitleElement = document.getElementById('second-title')

let firstTitle = document.querySelector('h1').textContent // select the first available h1 element
let secondTitle = document.querySelector('#second-title') // select id with first-title
let firstTitleId = document.querySelector('.title').getAttribute("id")   // select the first available element with class title

const allTitles = document.querySelectorAll('h1') //selects all the available h1 elements in the page
allTitles.forEach((el)=>console.log(el))

allTitles[4].setAttribute('class', 'title')
allTitles[4].setAttribute('id', 'fourth-title')

// allTitles[3].className = "title"
// allTitles[3].id = 'forth-title'


//adding class using classList

allTitles[4].classList.add('title', 'header-title')
allTitles[4].classList.remove('header-title')

const titles = document.querySelectorAll('h1')
titles[4].textContent = 'Forth Title'

//innerHTML

const lists = `
<li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Ongoing</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>`

const ul = document.querySelector('ul')
ul.innerHTML = lists

titles.forEach((title, i)=>{
    title.style.fontSize = '24px'
    title.style.color = 'white'
    if(i % 2 == 0) title.style.backgroundColor = 'red'
    else title.style.backgroundColor = 'green'
})


setTimeout(()=>{
    console.log(document.getElementsByClassName('title'))
}, 2000)

//Creating and manupulation elements. 

const headerEl = document.createElement('h2')
headerEl.className = 'title'
headerEl.style.fontSize = '30px'
headerEl.textContent = 'New header'
console.log(headerEl)

document.body.appendChild(headerEl)
//document.getElementById("first-title").appendChild(headerEl)

document.querySelector('ul').removeChild(document.querySelector('li')) //removes the top li element from ul

//document.querySelector('ul').innerHTML = ''; //another way to remove chile elements. 

