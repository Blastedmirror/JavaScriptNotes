//For loop
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

//While Loop
let i1 = 0
while (i1 <= 5) {
  console.log(i1)
  i1++
}

// 0 1 2 3 4 5

//Do While Loop
let i2 = 0
do {
  console.log(i2)
  i2++
} while (i2 <= 5)

// 0 1 2 3 4 5

//For of loop

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  for (const tech of webTechs) {
    console.log(tech.toUpperCase())
  }
  
  // HTML CSS JAVASCRIPT REACT NODE MONGODB

  //Break

  for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
  
  // 0 1 2

  //Continue

  for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
  // 0 1 2 4 5