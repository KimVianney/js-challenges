/*

Fizzbuzz challenge
Author: Vianney Kimuri 


*/

function fizzBuzz (firstParam, secondParam) {
    const sum = firstParam.length + secondParam.length

    if ((sum) % 3 === 0) {
        console.log((sum) % 3)
        return "Fizz";
    } else if ((sum) % 5 === 0) {
        return "Buzz";
    } else if ((sum) % 3 === 0 && (sum) % 5 === 0){
        return "FizzBuzz";
    } else {
        return `Sum: ${sum}. Incompatible division`
    }
}

console.log(fizzBuzz("Vianney", "Kimuri"))