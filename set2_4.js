/*

Find element in array that doesn't appear twice
Author: Vianney Kimuri

*/

function nonRepeatingDigit(nums) {
    // Initialize object to hold numbers and their frequencies
    let objTracker = {}

    // Loop through array, check if number is already in the 
    // object we created, if not, add it to object with the number
    // of times it appears
    for (let i = 0; i < nums.length; i++) {
        digit = nums[i];
        if (!(digit in objTracker)) {
            objTracker[digit] = 1;
        } else {
            objTracker[digit] += 1;
        }
    }

    // Check all key-value pairs in object
    // if any pair, has a value which is 1
    // return its key, as an integer
    for (const [key, value] of Object.entries(objTracker)){
        if (value === 1) {
            return parseInt(key);
        }
    }
}

console.log(nonRepeatingDigit([2,2,1]))