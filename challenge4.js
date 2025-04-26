/*

First palindrome challenge
Author: Vianney Kimuri 


Assumptions: 

- Each input would have exactly one solution
- The same element cannot be used twice

*/

function firstPalindrome (words) {

    // Write simple function to handle reversing strings
    function reverseWord(str) {
        strArray = str.split('');
        let reversed = '';

        for (let i = strArray.length-1 ; i >= 0; i--) {
            reversed += strArray[i]
        }

        return reversed;
    }

    // Loop through array of words
    for (let i = 0; i < words.length; i++) {

        // Store original word and reversed word
        let word = words[i]
        let reversed_word = reverseWord(word);
        
        // Compare original word and reversed word
        if( word === reversed_word) {
            return word;
        }
    }

    return '';
}

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]))