/*

Find longest common prefix
Author: Vianney Kimuri

*/

function findLongestPrefix(words) {
    let lookup = {};

    // Check if the array is empty
    if (words.length === 0) return "";
    
    // Create and add all possible prefixes to lookup object
    for (let i = 0; i < words.length; i++) {
        word = words[i];
        let prefix = '';
        for (const letter of word) {
            // Add letter to prefix
            prefix += letter; 

            // Check how many words match the prefix
            if (words[i].startsWith(prefix) && (prefix in lookup)) {
                lookup[prefix] += 1;
            } else if (words[i].startsWith(prefix) && !(prefix in lookup)){
                lookup[prefix] = 1;
            } else {
                lookup[prefix] = 0
            }
        }
    }

    let resultPrefix = '';
    let maxFreq = 0;
    let maxLen = 0;

    // Compare keys and values, find the longest key, with the highest frequency
    for (const [key , value] of Object.entries(lookup)) {
        if (value > maxFreq && value === words.length) {
            maxFreq = value;
        }

        if (key.length > maxLen && value === maxFreq && value > 1) {
            resultPrefix = key;
        } else {
            return resultPrefix;
        }
    }

    return resultPrefix;

}

// console.log(findLongestPrefix(["dog", "racecar", "car"]))
// console.log(findLongestPrefix(["flower", "flow", "flight"]))
// console.log(findLongestPrefix( ["apple", "app", "apricot"]))
// console.log(findLongestPrefix(["abc", "abcd", "xyz"]))