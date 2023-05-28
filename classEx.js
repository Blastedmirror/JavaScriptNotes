
class Book {
    constructor(title, pages){
        this.title = title
        this.pages = pages
    }
}

let textbook = new Book("text book" , 121);

console.log(textbook)

//Declaration with default value

class Person {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []

    }

    //Function - Note that there's no need for function keyword

    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    //getter and setter - not a function

    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }

    // Static Methods - static methods are called without needing to create any object of the class


    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }

  }
  
  const person1 = new Person() // it will take the default values
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person1)
  console.log(person2)
  console.log(person1.getFullName())
  console.log(person2.getFullName())

person1.setScore = 1 // in place of person1.setScore(1);
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)

console.log(Person.favoriteSkill()) 

//Inheritence

class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }

    //Method Overriding 
    getFullName(){
        console.log("His name is " + this.firstName + " " + this.lastName)
    }
}
const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())