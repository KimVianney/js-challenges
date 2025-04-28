/* 

Finding longest common matrix

Author: Vianney Kimuri

*/

function findLongestPrefix (words) {
    if (words.length === 0) return "";

    let prefix = "";
    for (let i=0; i < words[0].length; i ++) {

        const currentLetter = words[0][i];

        for (const word of words) {
            if (i >= word.length || word[i] !== currentLetter) {
                return prefix;
            }

        }

        prefix += currentLetter;

    }

    return prefix;
}


// console.log(findLongestPrefix(["dog", "racecar", "car"]))
// console.log(findLongestPrefix(["flower", "flow", "flight"]))
// console.log(findLongestPrefix( ["apple", "app", "apricot"]))
// console.log(findLongestPrefix(["abcde", "abcd", "abc", "ab"]))
// console.log(findLongestPrefix(["a", "abc", "abcd", "xyz"]))