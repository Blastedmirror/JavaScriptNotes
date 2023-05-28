const button = document.querySelectorAll('button')[1]


//button.addEventListener('click', (e) => {
button.addEventListener('dblclick', (e) => {
    console.log("event listener " , e)
    alert("Button is pressed")
})

// click - when the element clicked
// dblclick - when the element double clicked
// mouseenter - when the mouse point enter to the element
// mouseleave - when the mouse pointer leave the element
// mousemove - when the mouse pointer move on the element
// mouseover - when the mouse pointer move on the element
// mouseout -when the mouse pointer out from the element
// input -when value enter to input field
// change -when value change on input field
// blur -when the element is not focused
// keydown - when a key is down
// keyup - when a key is up
// keypress - when we press any key
// onload - when the browser has finished loading a page

const bmiButton = document.querySelectorAll('button')[2]

bmiButton.addEventListener('click', () => {
    bmi = mass.value / height.value ** 2
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})

const textInput = document.querySelector('input')
const para = document.querySelector('p')

textInput.addEventListener('input', (e) => {
    para.innerHTML = e.target.value
})
