//HTML 5 Web Storage

localStorage.setItem('firstName','Pritam')
localStorage.setItem('age', 200)
//const skills = ["HTML", "JavaScript", "TypeScript", "C#"]
const skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]
const skillsJson = JSON.stringify(skills)
localStorage.setItem('skills',skillsJson)

var skillsList = JSON.parse(localStorage.getItem("skills"))
skillsList.forEach(element => {
    console.log("Tech skill- " + element.tech + " level-" + element.level)
});

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
}

localStorage.setItem("user", JSON.stringify(user))
console.log(localStorage)

localStorage.clear();

