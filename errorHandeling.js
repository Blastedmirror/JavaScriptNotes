try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.error(err) // we can use console.log() or console.error()
} finally {
    console.log('In any case I will be executed')
}

//Error types

//1. Reference Error
//2. Syntax Error
//3. TypeError 