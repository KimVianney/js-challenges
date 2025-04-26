/*

Add digits challenge
Author: Vianney Kimuri 

*/

function addDigits (num) {

    // Convert the number to an array of digits 
    const digits = Array.from(num.toString(), Number)
    
    // Simple function to handle adding the digits in the array
    function sumDigits(arr) {
        let digitsSum = 0;

        for (let i=0; i < digits.length; i++) {
            digitsSum += digits[i]
        }

        return digitsSum;
    }

    // Check if the number consists of one digit
    if (digits.length === 1) {
        number = parseInt(digits.toString());
        return number;

    } else {

        result = sumDigits(digits);
        if (result.toString().length > 1) {
            addDigits(result);
        } 
            
        return result;
    }

    
}


// Test the console
console.log(addDigits(2048))
console.log(addDigits(11))