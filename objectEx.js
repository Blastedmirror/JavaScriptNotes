const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],

    getFullName : function(){
      return this.lastName +" "+ this.lastName;
    },

    isMarried: true
}
console.log(person)

console.log('Name ',  person.firstName+" "+person.lastName+". Profiency \
"+person.skills[2])
console.log("his name is ", person.getFullName())

//Object is a mutable data structure

person.nationality = "indian";
person.country = 'India';
console.log("He is ", person.nationality, "and is living in "+person.country);

person.getPersonInfo = function(){
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}

console.log(person.getPersonInfo())

//In-build methods to manipulate objects

//assign

const copyPerson = Object.assign({},person)
console.log(copyPerson)



copyPerson.address = {
  street: 'Delhi street',
  pobox: 2002,
  city: 'Delhi'
}

//Keys

console.log(Object.keys(copyPerson))
console.log(Object.keys(copyPerson.address))

//Values

console.log(Object.values(copyPerson))
console.log(Object.values(copyPerson.address))

//Entries - gets both the key value pair in from of 2d array

console.log(Object.entries(copyPerson))
console.log(Object.entries(copyPerson.address))

//hasOwnProperty - to check if that key or property is in that function or not

console.log(copyPerson.hasOwnProperty("name")) //false
console.log(copyPerson.hasOwnProperty("address")) //true
console.log(copyPerson.hasOwnProperty("getPersonInfo")) //true