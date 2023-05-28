//JavaScript allows writing function inside an outer function.
//We can write as many inner functions as we want. 
//If inner function access the variables of outer function then it is called closure.


function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {               //return an object with function definition
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne) //1
console.log(innerFuncs.minusOne) //0